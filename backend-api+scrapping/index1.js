const puppeteer = require('puppeteer');
const urlItem = 'https://govexams.com/knit/searchresult.aspx';
const screenShot = async (roll) => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    let res = []
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
                obj['RollNo'] = rollNo;
                console.log(rollNo)
                await page.waitForSelector('#lblname');
                const name = await page.$eval('#lblname',element => element.innerText);
                obj['Name'] = name;
                console.log(name)
                let isPercentAvailable = (await page.$('#lbltotlmarksDisp')) || "";
                if(isPercentAvailable == ""){
                    await page.waitForSelector('#lblAggMrk');
                    const marks = await page.$eval('#lblAggMrk',element => element.innerText);
                    obj['Marks'] = marks;
                    console.log(marks)
                    await page.waitForSelector('#lblPrcent');
                    const percent = await page.$eval('#lblPrcent',element => element.innerText);
                    obj['Percent'] = percent;
                    console.log(percent)
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
const start = async () => {
    let roll = [];
    let startRoll, rangeRoll = 20;

    //CE
    let ce = [];
    roll = []
    startRoll = 16101
    populateRoll(roll,startRoll,rangeRoll);
    ce = await screenShot(roll)
    console.log(ce);

    //CSE
    let cse = [];
    roll = []
    startRoll = 16201
    populateRoll(roll,startRoll,rangeRoll);
    cse = await screenShot(roll)
    console.log(cse);

    //EE
    let ee = [];
    roll = []
    startRoll = 16301;
    populateRoll(roll,startRoll,rangeRoll);
    ee = await screenShot(roll)
    console.log(ee);

    //ELE
    let ele = [];
    roll = []
    startRoll = 16401
    populateRoll(roll,startRoll,rangeRoll);
    ele = await screenShot(roll)
    console.log(ele);

    //ME
    let me = []
    roll = []
    startRoll = 16501
    populateRoll(roll,startRoll,rangeRoll);
    me = await screenShot(roll)
    console.log(me);

    //IT
    let it = [];
    roll = []
    startRoll = 16601
    populateRoll(roll,startRoll,rangeRoll);
    it = await screenShot(roll)
    console.log(it);

}

start();