function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

console.log('immediately');

sleep(1000).then(() => {
  console.log('After 1s')
})
.then(() => sleep(1000))
.then(() => {
  console.log("After 2s");
});
