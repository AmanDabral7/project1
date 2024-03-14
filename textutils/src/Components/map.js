const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951, coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg/330px-The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg" },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/330px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg" },
    { title: '1984', author: 'George Orwell', year: 1949, coverImage: "https://upload.wikimedia.org/wikipedia/en/5/51/1984_first_edition_cover.jpg" },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, coverImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/330px-The_Great_Gatsby_Cover_1925_Retouched.jpg" },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937, coverImage:"https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg" },
];

const onlyTitles = books.map((e)=>e.title);
console.log(onlyTitles)