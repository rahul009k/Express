const company = {
    name: "OpenAI",
    location: {
        city: "San Francisco",
        country: "USA"
    },
    ceo: {
        name: "Sam",
        age: 40
    }
};
console.log(company.name);
console.log(company.location.city);
console.log(company.location.country);
console.log(company["ceo"]["name"]);
console.log(company.ceo["age"]);
console.log(company);
