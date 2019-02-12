describe('storing notes', function() {

  var notepad = new Notepad;

  it('should be able to store notes', function() {
    notepad.add('Hello note fans');
    expect(notepad.notes.length).toEqual(1);
  });


})
