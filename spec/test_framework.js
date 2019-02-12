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

  function toInclude(itenTwo) {
    (itemOne.includes(itemTwo)) ? console.log("        Passed - Yay!") : console.log("        Fail. You loser.")
  }

  function toBeA(itemTwo) {
    (itemOne instanceof itemTwo) ? console.log("        Passed - Yay!") : console.log("        Fail. You loser.")
  }

  return { toEqual: toEqual, toInclude: toInclude, toBeA: toBeA }
};
