"use strict";
// importinam json i js
import data from "./data.json" assert { type: "json" };
console.log(data);

///1 patikrinam ar yra countries localStorage  // 2 padaryti kad data not found
const patikra = localStorage.getItem("countries");
console.log(patikra);

const sal = patikra === null ? [] : JSON.parse(patikra);
console.log(sal);

data.forEach((el, index) => {
  if (!el.hasOwnProperty(`capital`)) {
    const country = {
      id: index + 1,
      name: el.name.common,
      capital: "Data not faund",
    };
    console.log(country);
    sal.push(country);
  } else {
    const country = {
      id: index + 1,
      name: el.name.common,
      capital: el.capital[0],
    };
    console.log(country);
    sal.push(country);
  }
});
//3
console.log(sal);
localStorage.setItem("countries", JSON.stringify(sal));
