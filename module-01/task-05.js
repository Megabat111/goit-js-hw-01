"use strict";

let priceСhina = 100;
let priceСhile = 250;
let priceAustralia = 170;
let priceIndia = 80;
let priceJamaica = 120;


let deliveryCity = prompt('Оформите доставку товара к себе в страну, указав ее: ');
console.log(deliveryCity[0].toUpperCase(0) + deliveryCity.substring(1).toLowerCase());

const city = (deliveryCity[0].toUpperCase(0) + deliveryCity.substring(1).toLowerCase());

if (city) {
  switch (city) {
    case "Китай":
      alert(` Доставка в ${city} будет стоить ${priceСhina} кредитов `);
      break;
    case "Чили":
      alert(` Доставка в ${city} будет стоить ${priceСhile} кредитов `);
      break;
    case "Австралия":
      alert(` Доставка в ${city} будет стоить ${priceAustralia} кредитов `);
      break;
    case "Индия":
      alert(` Доставка в ${city} будет стоить ${priceIndia} кредитов `);
      break;
    case "Ямайка":
      alert(` Доставка в ${city} будет стоить ${priceJamaica} кредитов `);
      break;
    default:
      alert("В вашей стране доставка не доступна");
  }
}
