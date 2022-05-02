export const lineChartData = (studentData) => {
  const year1 = +studentData.yearWiseMarks[0].split("/")[0].trim() / 5;
  const year2 = +studentData.yearWiseMarks[1].split("/")[0].trim() / 10;
  const year3 = +studentData.yearWiseMarks[2].split("/")[0].trim() / 15;
  const year4 = +studentData.yearWiseMarks[3].split("/")[0].trim() / 20;
  const temp = [year1, year2, year3, year4];
  const data = [];
  data.push(["Year", "Percentage"]);
  temp.forEach((value, index) => {
    data.push([`Year ${index + 1}`, value]);
  });
  return data;
};

export const BarChartData = (studentData) => {
  const data = [];
  data.push(["Subjects", "Sessional marks", "Semester marks"]);
  studentData.semesterSubjects.forEach((value) => {
    if (!value.name.includes("PROJECT")) {
      data.push([
        value.name.split("[")[1].split("]")[0],
        +value.sessionalObtained,
        +value.writtenObtained,
      ]);
    }
  });
  return data;
};
