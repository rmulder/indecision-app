function convert(aDateStr) {
  var parts = aDateStr.split('-'), rtnObj = {};
  if (parts.length === 3) {
    rtnObj.year = parseInt(parts[0], 10);
    rtnObj.month = parseInt(parts[1], 10);
    rtnObj.day = parseInt(parts[2], 10);
  }

  return rtnObj;
}

function compare(dateObj1, dateObj2) {
  if (dateObj1 && dateObj2) {
    return (dateObj1.year === dateObj2.year && dateObj1.month === dateObj2.month && dateObj1.day === dateObj2.day);
  }
}


var dateStr = '2014-06-04',
  dateObj = {
    year: 2014,
    month: 6,
    day: 4
  };


if (compare(dateObj, convert(dateStr))) {
  alert('success');
} else {
  alert('fail');
}