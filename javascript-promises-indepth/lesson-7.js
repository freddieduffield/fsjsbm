const fs = require('fs')
const util = require('util')

// function readFile(path, encoding) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, encoding, (error, contents) => {
//       if (error) {
//         reject(error)
//       } else {
//         resolve(contents);
//       }
//     })
//   })
// }

const readFile = util.promisify(fs.readFile)


/*
// cases: 
// fail - 'test.txt'
// succeed - __filename
// null 
*/

readFile(__filename, 'utf8').then(
  contents => {
    console.log(contents);
  },
  error => {
    console.error(error);
  }
)


// fsreadFile('test.txt', 'utf8', (error, contents) => {
//   if (error) {
//     console.error(error)
//   } else {
//     console.log(contents);
//   }
// })