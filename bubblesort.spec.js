describe("Bubble Sort", function () {
  it("handles and empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });
  it("handles single item array", function () {
    expect(bubbleSort([1])).toEqual([1]);
  });
  it("handles multiple item array", function () {
    expect(bubbleSort([8, 2, 5, 100, 3000, 7, 1, 6, 10, 3])).toEqual([
      1,
      2,
      3,
      5,
      6,
      7,
      8,
      10,
      100,
      3000,
    ]);
  });
  // beforeAll(function () {
  //   spyOn(swap).and.callThrough();
  // });
  // it("number of times elements are swapped"),
  //   function () {
  //     bubbleSort([2, 7, 1, 40]);
  //     expect(swap.calls.count()).toEqual(2);
  //   };
});
