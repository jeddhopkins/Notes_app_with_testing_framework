// let Note = { body: "hello"}

describe('creating notes', function() {

  // beforeEach({
  //   var note = new Note("hello. this is a really really long note.");
  // })
  var note = new Note("hello. this is a really really long note.");


  it('should store a body of text', function() {
    expect(note.body).toEqual("hello. this is a really really long note.");
  })

  it('should show a 20 character preview', function() {
    expect(note.preview().length).toEqual(20)
  })
})
