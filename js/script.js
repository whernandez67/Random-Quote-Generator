// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
  document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var html = '';
var quoteList = [];
var red;
var green;
var blue;

//Array of objects containing quotes from https://www.goodreads.com/quotes 
var quotes = [
	 {quote: "Perhaps one did not want to be loved so much as to be understood.", 
	  source: "George Orwell", 
	  citation: "", 
	  year: 1984, 
	  tags: ["Truth"],
	 },
	 {quote: "Be yourself; everyone else is already taken.", 
	  source: "Oscar Wilde", 
	  citation: "", 
	  year: "", 
	  tags: [" Inspirational", " Be-yourself", " Honesty", " Inspirational"], 
	 },
	 {quote: "Peace begins with a smile..", 
	  source: "Mother Teresa", 
	  citation: "", 
	  year: "", 
	  tags: [" Peace", " Inspirational", " Peace", " Smile", " Smiling"],
	 },
	 {quote: "Don't Gain The World & Lose Your Soul, Wisdom Is Better Than Silver Or Gold.", 
	  source: "Bob Marley", 
	  citation: "", 
	  year: "", 
	  tags: [" Peace", " Soul", " Wealth", " Wisdom"],
	 },
	 {quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.", 
	  source: "Martin Luther King Jr.", 
	  citation: "A Testament of Hope: The Essential Writings and Speeches", 
	  year: "", 
	  tags: [" Darkness", " Drive-out", " Hate", " Inspirational", " Light", " Love", " Peace"],
	 }, 
 ];

//Function when called to generate random colors each time the button is clicked  
function generateRandomColor() {
	var rgbColor;
	red = Math.floor(Math.random() * 256 );
	green = Math.floor(Math.random() * 256 );
	blue = Math.floor(Math.random() * 256 );
	rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return rgbColor;
}	

function print(quote){
	document.getElementById('quote-box').innerHTML = quote;
}

/* Function to get a random quote from array of objects using the random number returned from 
the random fucntion then using the array splice property passing the start parameters.   	
*/
function getRandomQuote(){
 var randomQuote = Math.floor( Math.random() * quotes.length );
 var ramdomSplice = quotes.splice(randomQuote, 1)[0];
	quoteList.push(ramdomSplice);
	if ( quotes.length === 0) {
	    quotes = quoteList;
	    quoteList = [];
	}
	  return ramdomSplice;
 }
 
/* Function and stores the returned quote object in a variable the function constructs a string containing 
the different properties of the quote object using the following HTML template: and it doesn't add a for 
a missing citation or a if the year property is missing but displays the final HTML string to the page. 
You can use this JS snippet to accomplish that: document.getElementById('quote-box').innerHTML */ 
function printQuote() { 
 var quotes = getRandomQuote();
 html = '<p class="quote">' + quotes.quote + '</p>';

 if (quotes.citation) {
      var htmlCitation = quotes.citation;
 } else {
      htmlCitation = '';
 }
 if (quotes.year) {
      var htmlYear =  quotes.year;
 } else {
      htmlYear = '';	 
 }  
 if (quotes.tags) {
      var htmlTags = quotes.tags;
 } else {
      htmlTags += '';
 } 	 
  html += '<p class="source">' + quotes.source + '<span class="citation">' + htmlCitation + '</span>' + '<span class="citation">' + htmlYear + '</span></p>'; 
  
  html += '<p>tags: ' + htmlTags + '</p>';

 print(html);
 
	// Get random color
 generateRandomColor();
 	
 //Change the background color using the generate random color function 
 document.getElementById('backgroundcolor').style.backgroundColor = generateRandomColor();	
}	
