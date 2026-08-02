// if(process.argv[2]==undefined)
//     console.log("Please provide Name");
// else
// console.log("Name: " +process.argv[2])
// if(process.argv[3]==undefined)
//     console.log("Please provide Age");
// else
// console.log("Age: "+process.argv[3])
// if(process.argv[4]==undefined)
//     console.log("Please provide City");
// else
// console.log("City: "+process.argv[4])

let isUndefined=false;
for(let i=2;i<=4;i++)
{
    if(process.argv[i]==undefined)
       {
            isUndefined=true;
       }     
}
if(isUndefined==true)
{
                console.log("Please provide Name, Age and City.");
}
else{
    console.log("Name: " +process.argv[2])
console.log("Age: "+process.argv[3])
console.log("City: "+process.argv[4])

}
