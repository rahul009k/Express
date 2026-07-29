const prices = [100, 200, 300, 400];
const total= prices.reduce((sum,amount)=>sum+amount,0)
console.log(total);
