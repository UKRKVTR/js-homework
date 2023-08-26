let ageWorking = function (age) {
  return age >= 16 && age <= 65 ? true : false;
};
console.log(ageWorking(19));
console.log(ageWorking(10));
ageWorking(10);
/////////////////1//////////////////
function checkMultiplicity(a, b) {
  res = a % b;
  return a % b == 0 ? true : false;
  console.log(a);
  console.log(res);
}
console.log(checkMultiplicity(15, 4));
/////////////////2//////////////////
function checkMultiplicity(a, b, c) {
  return (res = a + b > c && a + c > b && b + c > a ? true : false);
  console.log(res);
}
console.log(checkMultiplicity(3, 4, 5));
/////////////////3//////////////////
let triangOrQuad = function (a, b, c = 0) {
  let res = 0;
  if (c === 0) {
    res = a * b;
    console.log(`Це прямокутник, площа якого ${res} см^2`);
  } else {
    res = (a * b * c) / 2;
    console.log(`Це трикутник, площа якого ${res} см^2`);
  }
  return res;
};
triangOrQuad(5, 2, 10);
triangOrQuad(5, 2);
triangOrQuad(5);
/////////////////4//////////////////
