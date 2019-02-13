feature('Load notepad', function() {

  scenario('Page has title', function() {
    visit('index.html')
    console.log("hello")
    expect().toHaveContent("NOTEPAD")
  });

});
