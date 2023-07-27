// npm install nodemon -g
// nodejs 프로세스 관리도구

exports.gradetemp = (body) => {
  let name = body.NAME;
  let html = parseInt(body.HTML);
  let css = parseInt(body.CSS);
  let node = parseInt(body.NODE);
  let android = parseInt(body.ANDROID);
  let sum = css + html + node + android;
  let avg = sum / 4;
  let grade = "F";
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
  }

  let result = "<html><body>";
  result += `<p>name : ${name}</p>`;
  result += `<p>html : ${html}</p>`;
  result += `<p>css : ${css}</p>`;
  result += `<p>node : ${node}</p>`;
  result += `<p>android : ${android}</p>`;
  result += `<p>avg : ${avg}</p>`;
  result += `<p>grade : ${grade}</p>`;
  result += "</body></html>";

  return result;
};
