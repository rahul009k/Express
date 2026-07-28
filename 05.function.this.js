const person = {
    name: "Rahul",

    greet() {
        console.log(this.name);
    }
};

person.greet();

const car={
    brand:"BMW",
    model:"X5",
    year:2024,
    print(){
        console.log(this.brand);
        console.log(this.model); 
        console.log(this.year);
    }
}
car.print();
const  book={
    title:"node",
    author:"rahul",
    price:199,
    print(){

        console.log(this.title);
        console.log(this.author);
        console.log(this.price);

    }
}
book.print();

