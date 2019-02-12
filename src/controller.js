var textbox = document.getElementById('textbox');
var submit = document.getElementById('submit');
var previews = document.getElementById('previews');
var notepad = new Notepad;

submit.addEventListener('click', getText)

function getText() {
  if (textbox.value) {
    notepad.add(textbox.value);
    textbox.value = "";
  };
};

function showPreviews() {

}
