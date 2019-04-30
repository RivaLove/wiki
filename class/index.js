// function AddHandle(a, b) {
//   this.a = a
//   this.b = b
// }

// AddHandle.prototype.add = function () {
//   alert(this.a + this.b) 
// }

// var as = new AddHandle(1, 2)
// console.log(as.add())
// as.add()

//this 测试

function fn() {
  console.log('fn', this);
  [1, 2, 3].map((cur) => {
    console.log('map', this);
  })
}

fn.call({ a: 100 })