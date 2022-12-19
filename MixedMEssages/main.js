
// array of strings to be randomly selected from with inspirational quotes
const quotes = [  "Believe you can and you're halfway there.",  "The only way to do great work is to love what you do.",  "Success is not the key to happiness. Happiness is the key to success.",  "The only limit to our realization of tomorrow will be our doubts of today.",  "Hardships often prepare ordinary people for an extraordinary destiny.",  "The journey of a thousand miles begins with a single step.",  "The only way to do great work is to be passionate about what you do.",  "You miss 100% of the shots you don't take.",  "The only thing standing between you and your dream is the will to try and the belief that it is actually possible.",  "Don't let yesterday take up too much of today.",];


// function to randomly select a quote from the quotes array
function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    console.log(randomQuote);

}


console.log(newQuote());