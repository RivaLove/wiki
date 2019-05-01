// let a = 10
// a = 100
// const b = 100

// const name = 'qindi', age = 18
// const html = `
//   <div>
//     <p>${name}</p>
//     <p>${age}</p>
//   </div>  
// `.trim()

// const obj = { a: 100, b: 200 }
// const { a, b } = obj
// const arr = ['aaa', 'bbb', 'ccc']
// const [x, y, z] = arr

const obj = { a: 100, b: 200 }
for (let i in obj) {
  console.log(obj[i])
}
console.log(i)