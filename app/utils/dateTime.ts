export const formatDate = (date) => {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return (
    date.getMonth() +
    1 +
    '/' +
    date.getDate() +
    '/' +
    date.getFullYear() +
    '  ' +
    strTime
  );
};

export const dateToString = (dateAndTime) => {
  const dd = dateAndTime.getDate();
  const mm = dateAndTime.getMonth() + 1;
  const yyyy = String(dateAndTime.getFullYear()).slice(2);
  const date = dd + '/' + mm + '/' + yyyy;

  let hour = dateAndTime.getHours();
  const amOrPm = hour >= 12 ? 'PM' : 'AM';

  hour %= 12;
  const hh = hour === 0 ? 12 : hour;
  const min = dateAndTime.getMinutes();
  const time = hh + ':' + min + ' ' + amOrPm;

  return date + ' ' + time;
};

export const timeAgo = (time) => {
  const currentTime = new Date();
  const oldTime = new Date(time);

  const minutes = Math.ceil(
    (currentTime.valueOf() - oldTime.valueOf()) / (1000 * 60),
  );
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const year = Math.floor(months / 30);

  if (year > 0) {
    return year + ' y';
  }
  if (months > 0) {
    return months + ' m';
  }
  if (days > 0) {
    return days + ' d';
  }
  if (hours > 0) {
    return hours + ' h';
  }
  return minutes + ' min';
};
