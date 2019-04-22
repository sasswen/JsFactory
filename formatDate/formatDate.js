/** 
 * formateTimeStamp: 时间戳转时间 => yyyy-MM-dd HH:mm:ss 
 * time: 时间戳
*/
export function formateTimeStamp(timeStamp, formatDate) {
  if(!timeStamp) {
    return null;
  }
  var date = new Date();
  var format_date = formatDate || null;
  date.setTime(timeStamp);
  var year = date.getFullYear();
  var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  var default_date = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
  var exact_day = year + "-" + month + "-" + day;
  var exact_month = year + "-" + month;
  if(!format_date) {
    return default_date;
  }
  if(format_date == 'yyyy-MM-dd') {
    return exact_day;
  }
  if(format_date == 'yyyy-MM') {
    return exact_month;
  }
  return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
}

/** 
 * formatDate: 时间转时间戳 2019-4-22 12:12:12 => 1555906332000
 * date: 日期 : sting
*/
export function formatDate(date) {
  if(!date) {
    return null;
  }
  var date_obj = new Date(date);
  return date_obj.getTime();
}