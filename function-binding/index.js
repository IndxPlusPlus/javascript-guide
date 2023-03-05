let book = {
    title: "Dummy Book Title",
    printTitle() {
        console.log(`Book Title: ${this.title}`);
    }
}

// setTimeout(() => {
//     book.printTitle();
// }, 1000);

// book.printTitle = book.printTitle.bind(book);

// setTimeout(book.printTitle, 1000);
