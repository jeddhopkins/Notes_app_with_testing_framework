function describe(description, fnc) {
  console.log(description);
  fnc()
};

function it(test, fnc) {
  describe('    ' + test, fnc);
};

function expect(itemOne) {

  function toEqual(itemTwo) {
    (itemOne === itemTwo) ? console.log("        Passed - Yay!") : console.log("        Fail. You loser.");
  };

  return { toEqual: toEqual }
};

// function beforeEach(fnc2) {
//
//   return function it(test, fnc) {
//     fnc2
//     describe('    ' + test, fnc);
//   };
// }
