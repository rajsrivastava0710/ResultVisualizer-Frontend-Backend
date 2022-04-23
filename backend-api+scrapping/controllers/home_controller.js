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

async function saveBranchStudentsinDB(startRoll, rangeRoll, students) {
    let roll = []
    populateRoll(roll,startRoll,rangeRoll);
    let studentData = []
    studentData = await screenShot(roll);
    let tempStudentData = []
    for(let i=0;i<studentData.length;i++){
        let percentNumber = Number(studentData[i]['Percent']);
        if(percentNumber>100 || percentNumber<=10) {
            continue;
        }
        let rollNo = studentData[i]['RollNo'];
        let exists = await Student.findOne({
            rollNumber: rollNo 
        });
        if(!exists ){
            var student = await Student.create(studentData[i])
            student.save()
        }
        tempStudentData.push(studentData[i]);
    }
    students.push(tempStudentData)
    // students.push(studentData);
}

module.exports.home = async function(req,res,next){
    let students = []

    let startRoll = 16101, rangeRoll = 10;
    await saveBranchStudentsinDB(startRoll,rangeRoll, students)
    console.log("Done 1/6")
	startRoll = 16201, rangeRoll = 10;
    await saveBranchStudentsinDB(startRoll,rangeRoll,students)
    console.log("Done 2/6")
    startRoll = 16301, rangeRoll = 10;
    await saveBranchStudentsinDB(startRoll,rangeRoll, students)
    console.log("Done 3/6")
    startRoll = 16401, rangeRoll = 10;
    await saveBranchStudentsinDB(startRoll,rangeRoll, students)
    console.log("Done 4/6")
    startRoll = 16501, rangeRoll = 10;
    await saveBranchStudentsinDB(startRoll,rangeRoll, students)
    console.log("Done 5/6")
    startRoll = 16601, rangeRoll = 10;
    await saveBranchStudentsinDB(startRoll,rangeRoll, students)
    console.log("Done 6/6")

    return res.status(200).json({
        data: {
            studentsData: students
        },
        message: "Scrapping Done",
    });
}

