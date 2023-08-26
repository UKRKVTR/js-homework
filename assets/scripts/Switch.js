let day = 7;
switch (day) {
  case 1:
    console.log("Понеділок");
    break;
  case 2:
    console.log("Вівторок");
    break;
  case 3:
    console.log("Середа");
    break;
  case 4:
    console.log("Четверг");
    break;
  case 5:
    console.log("П'ятниця");
    break;
  case 6:
    console.log("Суббота");
    break;
  case 7:
    console.log("Неділя");
    break;

  default:
    console.log("Такого дня немає");
}

let dayD = 12;
let decade;
switch (true) {
  case dayD >= 1 && dayD <= 10:
    decade = "перша";
    break;
  case dayD >= 11 && dayD <= 20:
    decade = "друга";
    break;
  case dayD >= 21 && dayD <= 31:
    decade = "третя";
    break;
  default:
    decade = "невідома";
    break;
}
console.log("Число " + dayD + " - це " + decade + " декада.");
