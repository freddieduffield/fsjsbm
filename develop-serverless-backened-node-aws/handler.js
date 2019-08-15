// module.exports.run = (event, context, callback) => {
//   console.log('I am debug statement');
//   callback(null, 'Hello World');
// };

// module.exports.run = event => {
//   return Promise.resolve('Hello');
// };

// module.exports.run = async event => {
//   return 'Hello Again';
// };

module.exports.run = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World'
    })
  };
};
