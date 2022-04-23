const puppeteer = require('puppeteer');

const urlItem = 'https://govexams.com/knit/searchresult.aspx';
exports.screenShot = async (roll) => {
	let res = []
    //turn the headless to false, if you dont want to see the scarpping gui
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
                let validYearExam = true;
                await page.evaluate(() => {
                    let examYear = document.querySelector('select option:nth-child(2)')
                    examYear.selected = true
                    if(examYear.innerText.substring(0,5) == "BACK"){
                        validYearExam = false;
                    }
                })
                if(!validYearExam)  continue;
                await page.click('#btnGo');
                await page.waitForSelector('#lblrno');
                const rollNo = await page.$eval('#lblrno',element => element.innerText);
                obj['rollNumber'] = rollNo;
                await page.waitForSelector('#lblname');
                const name = await page.$eval('#lblname',element => element.innerText);
                obj['name'] = name;

                let isPercentAvailable = (await page.$('#lbltotlmarksDisp')) || "";
                if(isPercentAvailable == ""){
                    await page.waitForSelector('#lblAggMrk');
                    const marks = await page.$eval('#lblAggMrk',element => element.innerText);
                    obj['totalMarks'] = marks;
                    await page.waitForSelector('#lblPrcent');
                    const percent = await page.$eval('#lblPrcent',element => element.innerText);
                    obj['percent'] = percent;
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