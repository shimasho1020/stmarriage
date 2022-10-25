const sleep = (milliseconds) => {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds)
  })
}

const test = () => {
  console.log(10000)
} 

export default ({}, inject) => {
  inject('sleep', sleep)
  inject('test', test)
}