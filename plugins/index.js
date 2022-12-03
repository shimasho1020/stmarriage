const sleep = (milliseconds) => {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds)
  })
}

const  getStringFromDate = (date) => {
  var year_str = date.getFullYear();
  //月だけ+1すること
  var month_str = 1 + date.getMonth();
  var day_str = date.getDate();
  format_str = 'YYYY-MM-DD';
  format_str = format_str.replace(/YYYY/g, year_str);
  format_str = format_str.replace(/MM/g, month_str);
  format_str = format_str.replace(/DD/g, day_str);
  return format_str;
 };

const test = () => {
  console.log(10000)
} 

export default ({}, inject) => {
  inject('sleep', sleep)
  inject('getStringFromDate', getStringFromDate)
  inject('test', test)
}