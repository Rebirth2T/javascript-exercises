const getTheTitles = function(books) {
    let bookArray = [];

    books.forEach(item => {
        bookArray.push(item.title);
    });
    
    return bookArray
};


// Do not edit below this line
module.exports = getTheTitles;
