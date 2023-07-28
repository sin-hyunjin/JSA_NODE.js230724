// npm install nodemon -g
// nodejs 프로세스 관리도구

exports.formtemp = (queryDate) => {
  let num1 = parseInt(queryDate.HTML);
  let num2 = parseInt(queryDate.CSS);
  let num3 = parseInt(queryDate.NODE);
  let num4 = parseInt(queryDate.ANDROID);
  let numbers = [num1, num2, num3, num4];
  let sum = num1 + num2 + num3 + num4;
  let avg = sum / numbers.length;

  let grade = "";
  if (avg >= 95) {
    grade = "A+";
  } else if (avg >= 90) {
    grade = "A";
  } else if (avg >= 85) {
    grade = "B+";
  } else if (avg >= 80) {
    grade = "B";
  } else if (avg >= 75) {
    grade = "C";
  } else if (avg < 75) {
    grade = "F";
  }
  let result_form = "";
  result_form =
    "<html><body>" +
    `<p>name : ${queryDate.NAME}</p>` +
    `<p>html : ${queryDate.HTML}</p>` +
    `<p>css : ${queryDate.CSS}</p>` +
    `<p>nodejs : ${queryDate.NODE}</p>` +
    `<p>android : ${queryDate.ANDROID}</p>` +
    `<p>avg:${avg} </p>` +
    `<p>grade:${grade} </p>` +
    "</body></html>";

  return result_form;
};
