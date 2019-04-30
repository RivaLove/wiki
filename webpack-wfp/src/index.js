// import util from './util1'
// import { fn1, fn2 } from './util2'

// console.log(util)
// fn1()
// fn2()

// [1, 2, 3].map(item => item + 1)

// class AddHandle {
//   constructor(a, b) {
//     this.a = a
//     this.b = b
//   }
//   add() {
//     return this.a + this.b
//   }
// }

// var ob = new AddHandle(1, 3)
// console.log(ob.add())

// function loadImg(src, callback, fail) {
//   var img = document.createElement('img')
//   img.onload = function () {
//     console.log(img)
//     callback(img)
//   }
//   img.onerror = function () {
//     fail()
//   }
//   img.src = src
// }

// var src = "http://es6.ruanyifeng.com/images/cover_thumbnail_3rd.jpg"
// loadImg(src, function (img) {
//   console.log(img.width)
// }, function () {
//   console.log('fail')
// })

function loadImg(src) {
  const promise = new Promise(function (consolve, reject) {
    var img = document.createElement('img')
    img.onload = function () {
      consolve(img)
    }
    img.onerror = function () {
      reject()
    }
    img.src = src
  })
  return promise
}
var src = "http://es6.ruanyifeng.com/images/cover_thumbnail_3rd.jpg"
var result = loadImg(src)

result.then(function (img) {
  console.log(img.width)
}, function () {
  console.log('fail')
})

result.then(function (img) {
  console.log(img.height)
})