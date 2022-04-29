const puppeteer = require("puppeteer");
const helper = require("../helpers/mainHelper")

const urlItem = "https://govexams.com/knit/searchresult.aspx";
exports.screenShot = async (roll) => {
  let res = [];
  //turn the headless to false, if you dont want to see the scarpping gui
  const browser = await puppeteer.launch({ headless: false, ignoreHTTPSErrors: true});
  const page = await browser.newPage();

  for (let i = 0; i < roll.length; i++) {
    try {
      if(helper.isItABadEntry(roll[i]))  continue;
      let obj = {};
      await page.goto(urlItem);
      await page.waitForSelector("#txtrollno");
      await page.type("#txtrollno", roll[i]);
      await page.click("#btnSearch");
      await page.waitForSelector("#ddlResult");
      // const selectElem = await page.$('select[name="ddlResult"]');
      // await selectElem.type('REGULAR (2019-20) Semester 7-8');
      const isValid = await page.$eval(
        "#txtrollno",
        (element) => element.value
      );

      if(isValid.length > 0) {
          await page.evaluate(() => {
              let firstSelection = document.querySelector(`select option:nth-child(2)`)
              let secondSelection = document.querySelector(`select option:nth-child(3)`)
              if(firstSelection.innerText == "SPL-BACK (2019-20) Semester 7-8") {
                firstSelection.selected = true
              } else if(secondSelection.innerText == "SPL-BACK (2019-20) Semester 7-8") {
                secondSelection.selected = true
              } else {
                for(var selection = 2; selection <= 3; selection++) {
                  let examYear = document.querySelector(`select option:nth-child(${selection})`);
                  if(examYear === undefined) break
                  let selectedString  = examYear.innerText
                  var len = selectedString.length
                  if(selectedString.substring(len-3) != "7-8")  continue;
                  examYear.selected = true;
                  break;
                } 
              }
          })

        await page.click("#btnGo");
        await page.waitForSelector("#lblrno");
        const rollNo = await page.$eval(
          "#lblrno",
          (element) => element.innerText
        );
        obj["rollNumber"] = rollNo;

        await page.waitForSelector("#lblname");
        const name = await page.$eval(
          "#lblname",
          (element) => element.innerText
        );
        obj["name"] = name;

        await page.waitForSelector("#lblfname");
        const fatherName = await page.$eval(
          "#lblfname",
          (element) => element.innerText
        );
        obj["fatherName"] = fatherName;

        await page.waitForSelector("#lblEntry");
        const studentType = await page.$eval(
          "#lblEntry",
          (element) => element.innerText
        );
        obj["studentType"] = studentType;

        await page.waitForSelector("#lblbranch");
        const courseBranch = await page.$eval(
          "#lblbranch",
          (element) => element.innerText
        );
        if(courseBranch.length > 0) {
          obj["course"] = courseBranch.split("/")[0].trim()
        }

        await page.waitForSelector("#lblDeclare");
        const resultDate = await page.$eval(
          "#lblDeclare",
          (element) => element.innerText
        );
        if(resultDate.length > 4) {
          obj["passingYear"] = resultDate.substr(resultDate.length - 4);
        }

        // All 4 years marks and passing status
        ///////////////////////////////////////////////////////
        var yearWiseMarks = [], yearWisePassStatus = []
        var yearConnector = ["1st","2nd","3rd","4th"]
        for(var year=1;year<=4;year++) {
          await page.waitForSelector(`#lbl${yearConnector[year-1]}YearMrk`);
          const marks = await page.$eval(
            `#lbl${yearConnector[year-1]}YearMrk`,
            (element) => element.innerText
          );
          if(marks.length == 0) {
            yearWiseMarks.push("N/A")
          } else {
            yearWiseMarks.push(marks);
          }
          ///////////////////////////////////////////////////////////
          await page.waitForSelector(`#lbl${yearConnector[year-1]}YearStat`);
          const status = await page.$eval(
            `#lbl${yearConnector[year-1]}YearStat`,
            (element) => element.innerText
          );
          if(status.length == 0) {
            yearWisePassStatus.push("N/A")
          } else {
            yearWisePassStatus.push(status);
          }
        }
        obj["yearWiseMarks"] = yearWiseMarks
        obj["yearWisepassingStatus"] = yearWisePassStatus
        //////////////////////////////////////////////////////////////

        await page.waitForSelector("#lblDiv");
        const division = await page.$eval(
          "#lblDiv",
          (element) => element.innerText
        );
        obj["division"] = "N/A"
        if(division.length > 0) {
          obj["division"] = division
        }

        let isPercentAvailable = (await page.$("#lbltotlmarksDisp")) || "";
        if (isPercentAvailable == "") {
          await page.waitForSelector("#lblAggMrk");
          const marks = await page.$eval(
            "#lblAggMrk",
            (element) => element.innerText
          );
          obj["totalMarks"] = marks;
          await page.waitForSelector("#lblPrcent");
          const percent = await page.$eval(
            "#lblPrcent",
            (element) => element.innerText
          );
          obj["percent"] = percent;
        }

        //////////////////////////////////////////Subjects///////////////////
  
        obj["subject"] = []
        var firstBlockStart = 5
        firstBlockEnd = await findCorrectBlockEnd(firstBlockStart, page)

        var secondBlockStart = firstBlockEnd+2
        secondBlockEnd = await findCorrectBlockEnd(secondBlockStart, page)
  
        await populateSubjectData(firstBlockStart, firstBlockEnd, obj, page)
        await populateSubjectData(secondBlockStart, secondBlockEnd, obj, page)

        await res.push(obj);

        ////////////////////////////////////////////////////////////////////////

      }
    } catch (err) {
      console.log(err);
    }
  }

  await browser.close();
  return res;
};

async function populateSubjectData(startRow, endRow, obj, page) {
  for(var row = startRow;row <= endRow;row++) {
    await page.waitForSelector(`#TableMark tbody tr:nth-child(${row}) td span`);
    var rowData = []
    for(var col = 1;col <= 6;col++) {
      const items = await page.$eval(
        `#TableMark tbody tr:nth-child(${row}) td:nth-of-type(${col}) span`,
        (element) => element.innerText
      )
      rowData.push(items)
    }
    obj["subject"].push(rowData); 
  }
}

async function findCorrectBlockEnd(blockEnd, page) {
  while(1) {
    await page.waitForSelector(`#TableMark tbody tr:nth-child(${blockEnd}) td span`);
    const row = await page.$eval(
      `#TableMark tbody tr:nth-child(${blockEnd}) td span`,
      (element) => element.innerText
    );
    if(row.substring(0,19).toLowerCase() == "general proficiency" ||
    row.substring(0,17).toLowerCase() == "general profiency")
      break;
    blockEnd += 1
  }
  return blockEnd
}