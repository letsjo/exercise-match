const GetDate = (dateData) => {
  const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];
  const newDate = new Date(dateData);
  var timestamp = newDate.getTime();
  var timestampNow = Date.now();
  var date = new Date(timestamp);
  var timeGap = timestampNow - timestamp;
  const getGapMin = Math.ceil(timeGap / 60000);
  //   var date = new Date(new Date(dateData).getTime());
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    week: WEEKDAY[date.getDay()],
    hour: date.getHours(),
    min: date.getMinutes(),
    sec: date.getSeconds(),
    gapMin: getGapMin,
  };
};

export default GetDate;
