const quoteContainer = document.getElementById('quotecontainer');
const quotesText = document.getElementById('quotes');
const authorText = document.getElementById('author');
const twitterBtn =document.getElementById('tweetMe');
const newQuoteBtn =document.getElementById('nquotes');

let apiQuotes = [];

 function newQuote( ){
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
   authorText.textContent =quote.author;
   quotesText.textContent =quote.text;
 }

 async function getQuotes() {
     const apiUrl='https://type.fit/api/quotes';
     try {
         const response = await fetch (apiUrl);
         apiQuotes = await response.json();
         newQuote();
     }catch(error){

     }
 }
 getQuotes();




// const quoteContainer = document.getElementById("quotecontainer");
// const quotes = document.getElementById("quotes");
// const author = document.getElementById("author");
// const tweetMe =document.getElementById("tweetMe");
// const nquotes =document.getElementById("nquotes");

// let realData ="";
// let quotesData ="";

// const tweetNow =() =>{
//     let tweetPost =`https://twitter.com/intent/tweet?text=${quotesData.text}`;
//     window.open(tweetPost)
// };
// const getNewQuotes = () => {
//     let rnum = Math.floor(Math.random() * 10);
//     // console.log(realData[rnum].author);
//     quotesData = realData[rnum];
//     quotes.innerText =`${quotesData.text}`;
//     quotesData.author = null ? (author.innerText = "unknown") : (author.innerText = `${quotesData.author}`);
// };
// const getQuotes = async ()=> {
// const api ='https://type.fit/api/quotes';
// try {
//     let data = await fetch(api);
//     realData = await data.json();
//     getNewQuotes();
//     //  console.log(realData.length);
//     // console.log(realData[10].author);
//     }catch (error){}
// };
// tweetMe.addEventListener('click',tweetNow);
// nquotes.addEventListener('click',getNewQuotes);
// getQuotes();