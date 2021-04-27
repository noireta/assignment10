//STEP 1
let d = new Date();
function daysInMonth (month, year) { 
    return new Date(year, month, 0).getDate();
  }
  console.log("Number of Days in Month: "+ daysInMonth(d.getMonth() +1, d.getFullYear()));

//STEP 2

var month_name = function(dt){
  let monthlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    return monthlist[dt.getMonth()];
  };
  let monthDate = prompt("please give me a date mm/dd/yyyy")
  console.log(month_name(new Date(monthDate)));

//STEP 3

var is_weekend =  function(date1){
  var dtOf_weekend = new Date(date1);
   
  if(dtOf_weekend.getDay() == 6 || dtOf_weekend.getDay() == 0)
     {
      return "weekend";
      } 
    else
    {
      return "weekday";
    }
}

let weekendOfdate = prompt("Please Entert Weenkend date")
console.log(is_weekend(weekendOfdate));

//STEP 4

let days_OfWeek = ["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"];
let weekof_yes = prompt("Please enter  day of the week. ")
let asd = new Date(weekof_yes);
let currentDayOfWeek = asd.getDay(); // 0 - 6
let yesterdayDayOfWeek = 0;

if ( currentDayOfWeek == 0 )
{
  yesterdayDayOfWeek = 6;
}
else
{
  yesterdayDayOfWeek = currentDayOfWeek - 1;
}

let previousWeekDay = days_OfWeek [yesterdayDayOfWeek];

console.log( previousWeekDay);

//STEP 5

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let currDay = prompt("Please enter current day of the week. ")
let dayOfCurrent = new Date(currDay);
let currentDayOfWeek = dayOfCurrent.getDay(); 
let strDayOfWeek = days[currentDayOfWeek];
console.log(strDayOfWeek[0]);



