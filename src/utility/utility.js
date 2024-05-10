function transformDate(date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const year = date.substring(0, 4);
  const monthIndex = parseInt(date.substring(5, 7)) - 1;
  const day = date.substring(8, 10);

  return `${months[monthIndex]} ${day}, ${year}`;
}

function splitString(str) {
  const strArray = str.split(",");
  return strArray;
}

function capitalizedString(str) {
  const firstLetter = str.substring(0, 1).toUpperCase();
  const restOfStr = str.substring(1, str.length);
  return firstLetter + restOfStr;
}

export { transformDate, splitString, capitalizedString };
