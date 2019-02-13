// visit
// click_on
// fill_in
// has_content

function feature(description, fnc) {
  console.log(description);
  fnc()
};

function scenario(test, fnc) {
  feature('    ' + test, fnc);
};

function visit(file){
  body = document.getElementById('body')
  body.insertAdjacentHTML( 'beforeend', `<iframe src="http://127.0.0.1:3000/${file}" id="iframe"></iframe>` )
};

function expect() {
  iframe = document.getElementById('iframe')
  iframebody = iframe.contentDocument.getElementsByTagName('body')

  function toHaveContent(content) {
    // iframebody = iframe.contentDocument.body
    // console.log(iframe.contentDocument.body);
    console.log(iframebody);
    iframebody.includes(content) ? console.log('yes') : console.log('no');
  }
  return {toHaveContent: toHaveContent}
};
