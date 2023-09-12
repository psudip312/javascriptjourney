//RETURN KEYWORD
// now euta function bata kunai value haru bahera nikalna ko lagi we use return keyword

let countryCode = [
  {
    code: "np",
    CountryName: "Nepal",
    path: "nepal",
  },
  {
    code: "npx",
    CountryName: "India",
    path: "nepal",
  },
  {
    code: "red",
    CountryName: "Rajastan",
    path: "nepal",
  },
  {
    code: "pk",
    CountryName: "Pakistan",
    path: "nepal",
  },
  {
    code: "ttu",
    CountryName: "Taiwan",
    path: "nepal",
  }
]

let findCounrty = () => {
  console.log(`${countryCode[0].code}`);
};

function findCountry(CountryName) {
    for (let index = 0; index < countryCode.length; index++) {
      if (CountryName.tolowerCase() == countryCode[index].CountryName) {
        console.log(`${countryCode[index].CountryName} code is ${countryCode[index].code}`);
    break;  
    }
    }
  }
  findCountry("Nepal");
  findCountry("Rajasta")
  