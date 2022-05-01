const puppeteer = require('puppeteer');
// const urlItem = 'https://www.amazon.co.in';
const urlItem = 'https://govexams.com/knit/searchresult.aspx';
const screenShot = async (res,roll) => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    // other actions...
    // await page.screenshot({path: "ss.png"});
    // await page.evaluate(()=>{
    //     let searchBar = document.querySelector('#twotabsearchtextbox');
    //     searchBar.value = 'Hi Bro';
    //     let btn = document.querySelector('#nav-search-submit-button');
    //     btn.click();
    //     document.querySelector('#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(8) > div > span > div > div > span > a > div > img').click();
    // })
    // await page.type('#twotabsearchtextbox','Hi Bro');
    // await page.click('#nav-search-submit-button');
    // const btn = await page.waitForSelector('#twotabsearchtextbox');
    // await page.type('#twotabsearchtextbox','No Bro');
    // await page.click('#nav-search-submit-button');
    // page.evaluate(async () => {

        for(let i=0;i<roll.length;i++){
            try{
                let obj = {};
                await page.goto(urlItem);
                await page.waitForSelector('#txtrollno');
                await page.type('#txtrollno',roll[i]);
                await page.click('#btnSearch');
                await page.waitForSelector('#ddlResult');
                // await page.select('#ddlResult','21845');
                // const selectElem = await page.$('select[name="ddlResult"]');
                // await selectElem.type('REGULAR (2019-20) Semester 7-8');
                const isValid = await page.$eval('#txtrollno',element => element.value);
            
                // console.log(isValid.length);
                if(isValid.length > 0){
                    await page.evaluate(() => {
                        document.querySelector('select option:nth-child(2)').selected = true;
                      })
                    await page.click('#btnGo');
                    // await page.waitForNavigation();
                    await page.waitForSelector('#lblrno');
                    const rollNo = await page.$eval('#lblrno',element => element.innerText);
                    obj['RollNo'] = rollNo;
                    await page.waitForSelector('#lblname');
                    const name = await page.$eval('#lblname',element => element.innerText);
                    obj['Name'] = name;

                    let isPercentAvailable = (await page.$('#lbltotlmarksDisp')) || "";
                    if(isPercentAvailable == ""){
                        await page.waitForSelector('#lblAggMrk');
                        const marks = await page.$eval('#lblAggMrk',element => element.innerText);
                        obj['Marks'] = marks;
                        await page.waitForSelector('#lblPrcent');
                        const percent = await page.$eval('#lblPrcent',element => element.innerText);
                        obj['Percent'] = percent;
                        // await page.waitForSelector('#lblPrcent');
                        // const percent = await page.$eval('#lblPrcent',element => element.innerText);
                        // obj['Percent'] = percent;
                        // await page.waitForSelector('#lblAggMrk');
                        // const marks = await page.$eval('#lblAggMrk',element => element.innerText);
                        // obj['Marks'] = marks;
                        // res.push(obj);
                        // await page.waitFor(200);
                        await res.push(obj);
                        // if(i == roll.length()){
                        //     await browser.close();
                        // }
                    // await page.goBack();
                    }
                }
    
            }catch(err){
                console.log(err);
            }
        }
    
    await browser.close();
}
function populateRoll(roll,startRoll,rangeRoll){
    for(let rollNo = startRoll; rollNo < startRoll + rangeRoll; rollNo++){
        roll.push(String(rollNo))
    }
}
const start = async () => {
    let roll = [];
    let startRoll, rangeRoll = 2;

    //CE
    let ce = [];
    roll = []
    startRoll = 16101
    populateRoll(roll,startRoll,rangeRoll);
    startRoll = 16101;
    await screenShot(ce,roll)
    console.log(ce);

    //CSE
    let cse = [];
    roll = []
    startRoll = 16201
    populateRoll(roll,startRoll,rangeRoll);
    await screenShot(cse,roll)
    console.log(cse);

    //EE
    let ee = [];
    roll = []
    startRoll = 16301;
    populateRoll(roll,startRoll,rangeRoll);
    await screenShot(ee,roll)
    console.log(ee);

    //ELE
    let ele = [];
    roll = []
    startRoll = 16401
    populateRoll(roll,startRoll,rangeRoll);
    await screenShot(ele,roll)
    console.log(ele);

    //ME
    let me = []
    roll = []
    startRoll = 16501
    populateRoll(roll,startRoll,rangeRoll);
    await screenShot(me,roll)
    console.log(me);

    //IT
    let it = [];
    roll = []
    startRoll = 16601
    populateRoll(roll,startRoll,rangeRoll);
    await screenShot(it,roll)
    console.log(it);

}

start();

//Going over collection of a selector and do something like for all li eleemnts:
/* 
await page.evaluate(()=>{
    var repo = document.querySelectorAll('selector-name');
    return Array.from(repo).map((x) => {return x.href or anything})
}); 

//Waiting for data to get populated in selectors
await page.waitForSelector('selector-name')
await page.waitFor(fnName);

function fnName() {
    return document.querySelector('selector-name').innerHTML != '';
}

//Scrap the data
var data = await page.evaluate(() => {
    return document.querySelector('selector-name').innerHTML;
})

//PDF
await page.pdf({
    path:fileName,
    format:'Letter',
    margin: {
        top: '1in',
        left: '1in'
    }
})

//Generate pdf from markup only

const html = "<h1>Hello Raj</h1>";
await page.setContent(html);
await page.pdf({
    //
})
*/