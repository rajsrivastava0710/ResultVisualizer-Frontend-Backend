const puppeteer = require('puppeteer');
const Student = require("../models/student")


const urlItem = 'https://govexams.com/knit/searchresult.aspx';
const screenShot = async (roll) => {
	let res = []
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    for(let i=0;i<roll.length;i++){
        try{
            let obj = {};
            await page.goto(urlItem);
            await page.waitForSelector('#txtrollno');
            await page.type('#txtrollno',roll[i]);
            await page.click('#btnSearch');
            await page.waitForSelector('#ddlResult');
            // const selectElem = await page.$('select[name="ddlResult"]');
            // await selectElem.type('REGULAR (2019-20) Semester 7-8');
            const isValid = await page.$eval('#txtrollno',element => element.value);
    
            if(isValid.length > 0){
                await page.evaluate(() => {
                    document.querySelector('select option:nth-child(2)').selected = true;
                    })
                await page.click('#btnGo');
                await page.waitForSelector('#lblrno');
                const rollNo = await page.$eval('#lblrno',element => element.innerText);
                obj['rollNumber'] = rollNo;
                await page.waitForSelector('#lblname');
                const name = await page.$eval('#lblname',element => element.innerText);
                obj['Name'] = name;

                let isPercentAvailable = (await page.$('#lbltotlmarksDisp')) || "";
                if(isPercentAvailable == ""){
                    await page.waitForSelector('#lblAggMrk');
                    const marks = await page.$eval('#lblAggMrk',element => element.innerText);
                    obj['totalMarks'] = marks;
                    await page.waitForSelector('#lblPrcent');
                    const percent = await page.$eval('#lblPrcent',element => element.innerText);
                    obj['Percent'] = percent;
                    await res.push(obj);
                }
            }

        }catch(err){
            console.log(err);
        }
    }
    
    await browser.close();
	return res;
}

function populateRoll(roll,startRoll,rangeRoll){
    for(let rollNo = startRoll; rollNo < startRoll + rangeRoll; rollNo++){
        roll.push(String(rollNo))
    }
}

module.exports.home = async function(req,res,next){
	let roll = [];
	let startRoll = 16250, rangeRoll = 10;
	let cse = []
	populateRoll(roll,startRoll,rangeRoll);
	cse = await screenShot(roll);
    for(let i=0;i<cse.length;i++){
        let rollNo = cse[i]['RollNo'];
        let exists = await Student.findOne({
            rollNumber: rollNo 
        });
        if(!exists){
            var student = await Student.create(cse[i])
            student.save()
        }
    }
    return res.status(200).json({
        data: {
            students: cse
        },
        message: "Scrapping Done"
    });
}

module.exports.createBook = async function(req,res){
	try{
			let exists = await Book.findOne({
				name:req.body.name
			});

			let book = await Book.create(req.body)
			book.creator = req.user.id;
			if(exists){
				book.copyAvailable = true;	
			}
			book.save();
			req.flash('success','Book successfully created !');
			return res.redirect('/library');
	}catch(err){
		console.log(err);
		req.flash('error','Error while creating book ..');
		return res.redirect('back');
	}
}