var submit = document.getElementById('submit');
var notepad = new Notepad;

submit.addEventListener('submit', function(event) { addNoteToList(event) });

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
      main = document.getElementById("main")
      main.innerHTML =`${note.body}`;
    };
  };
};
