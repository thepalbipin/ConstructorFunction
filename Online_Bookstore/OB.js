

function Book(title, author, genre, price){
    this.title=title;
    this.author=author;
    this.genre=genre;
    this.price=price;
};

function Author(name, birth_year, nationality){
    this.name=name;
    this.birth_year=birth_year;
    this.nationality=nationality;
};


let author1= new Author("Munshi Prem Chand", 1880, "Indian");
let author2= new Author("ruskin Bond", 1964, "Indian");
let author3= new Author("Chetan bhagat", 1984, "Indian");

let book1 = new Book("Khilona", author1, "drama", 130);
let book2 = new Book("Jab we met", author2, "romantic Comedy", 120);
let book3 = new Book("The time we travel", author3, "romance", 85);

console.log(author1, author2, author3);

console.log(book1,book2, book3);