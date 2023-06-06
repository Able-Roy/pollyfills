Array.prototype.sort = function (compareFunction) {
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length - (i + 1); j++) {
      if (
        compareFunction
          ? compareFunction(this[j], this[j + 1]) > 0
          : this[j].toString() > this[j + 1].toString()
      ) {
        let temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }
  return this;
};

var arrNum = [5, 3, 4, 2, 1];
var arrStr = ["d", "b", "c", "a"];
// Array.prototype.sort
arrNum.sort((a, b) => a - b);
console.log(arrNum);
arrStr.sort();
console.log(arrStr);
