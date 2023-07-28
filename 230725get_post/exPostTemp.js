// 화면에 대한 구조 정의! --> 모듈화
exports.postTemp = (queryDate) => {
  let result_html = "";
  result_html =
    "<html><body>" +
    `<p>ID : ${queryDate.user_id}</p>` +
    `<p>PW : ${queryDate.password}</p>` +
    `<p>RE_PW : ${queryDate.re_password}</p>` +
    `<p>gender : ${queryDate.gender}</p>` +
    `<p>birth : ${queryDate.birth}</p>` +
    `<p>textarea : ${queryDate.textarea}</p>` +
    "</body></html>";

  return result_html;
};
