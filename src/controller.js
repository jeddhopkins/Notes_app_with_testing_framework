var submit = document.getElementById('submit');
var notepad = new Notepad;
var back = document.getElementById('back');
var shownote = document.getElementById("shownote")
var main = document.getElementById("main");
submit.addEventListener('submit', function(event) { addNoteToList(event) });
back.addEventListener('click', backToHome)
// document.getElementById("test").addEventListener("click", function(event) { loadNote(event) })


function addNoteToList(event){
  var counter = notepad.notes.length;
  event.preventDefault();
  var textbox = document.getElementById('textbox');
  var note = addNote(textbox.value);
  addLinkElem(counter, note);
  addListener();
  textbox.value = "";

  function addNote(text){
    if (text) {
      note = notepad.add(text)};
    return note;
  };

  function addLinkElem(num, note){
    var previews = document.getElementById('previews');
    previews.insertAdjacentHTML('beforeend', `<a id=${num} href = "">${note.preview()}</a><br>`);
  };

  function addListener() {
    document.getElementById(counter).addEventListener('click', function(event){loadNote(event)});

    function loadNote(event) {
      event.preventDefault();
      switchVisibility()
      showNotebody();

      function showNotebody() {
        notebody = document.getElementById("notebody")
        notebody.innerHTML = `${note.body}`;
      };

      function switchVisibility() {
        shownote.className = "visible";
        main.className = "hidden";
      };
    };
  };
};

function backToHome() {
  main.className = "visible";
  shownote.className = "hidden";
}
