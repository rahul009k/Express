const laptop = {
    brand: "Dell",
    ram: "16GB",
    storage: "512GB",
    price: 75000
};
for(const key in laptop)
{

    console.log(key,laptop[key]);
}