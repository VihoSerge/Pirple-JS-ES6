/*
* Homework Assignment #5: Switch Statements
*/


const timeAdder = (value1, label1, value2, label2) => {
  let unit = ["second", "minute", "hour", "day"];
  let units = ["seconds", "minutes", "hours", "days"];
  let unitss = ["seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"];

  if((!Number.isInteger(value1) || !Number.isInteger(value2))
      || (unitss.indexOf(label1) === -1 || unitss.indexOf(label2) === -1)) {
    return false;
  }

  if ((value1 === 0 && value2 === 0) || (value1 === 1 && units.indexOf(label1) !== -1)
      || (value2 === 1 && units.indexOf(label2) !== -1)
      || (value1 > 1 && unit.indexOf(label1) !== -1) || (value2 > 1 && unit.indexOf(label2) !== -1)) {
    return false;
  }

  let value3;
  let label3 = "second";

  switch (label1) {
    case "second":
    case "seconds":
      value3 = value1;
      break;
    case "minute":
    case "minutes":
      value3 = value1 * 60;
      break;
    case "hour":
    case "hours":
      value3 = value1 * 60 * 60 ;
      break;
    case "day":
    case "days":
      value3 = value1 * 60 *60 * 24;
      break;
  }

  switch (label2) {
    case "second":
    case "seconds":
      value3 += value2;
      break;
    case "minute":
    case "minutes":
      value3 += value2 * 60;
      break;
    case "hour":
    case "hours":
      value3 += value2 * 60 * 60 ;
      break;
    case "day":
    case "days":
      value3 += value2 * 60 *60 * 24;
      break;
  }

  if(value3 % (60 * 60 * 24) === 0) {
    value3 = value3 / (60 * 60 * 24);
    label3 = "day"
  }else if(value3 % (60 * 60) === 0) {
    value3 = value3 / (60 * 60);
    label3 = "hour"
  }else if(value3 % (60 ) === 0) {
    value3 = value3 / (60 );
    label3 = "minute"
  }

  label3 += value3 > 1 ? 's' : '';

  return [value3, label3];
}

// Test

console.log(timeAdder(false,false,5,"minutes"));
console.log(timeAdder({},"days",5,"minutes"));
console.log(timeAdder(15,"hours",1,"minute") );
console.log(timeAdder(20,"hours",5,"hours"));
console.log(timeAdder(20,"hours",4,"hours"));

console.log(timeAdder(0,"hours",0,"days"));
