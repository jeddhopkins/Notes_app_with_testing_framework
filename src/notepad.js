function Notepad() {
  this.notes = []
}

Notepad.prototype.add = function (note) {
  this.notes.push(note)
};
