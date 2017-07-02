Before you start
To prepare for this project you'll need to make sure you complete and understand these steps.
 3 steps
•	Make sure you have a GitHub account and know how to create a new repository and upload files to it. You'll submit your finished work for each Techdegree project using GitHub.
•	If you need a reminder on how to use GitHub and GitHub desktop, check out the workshop Share Your Projects wIth GitHub Desktop.
•	Download the project files by clicking the Project Files link on this page. We've supplied four files for you to use:
o	index.html is the web page you'll link your JavaScript file to, and on which you'll display random quotes. It includes a sample of the HTML you'll need to dynamically create with JavaScript.
o	Inside the js folder is script.js, a starter JavaScript file that includes some code to get you started. You'll add your own programming to this file also.
o	There are two CSS stylesheets in the css folder containing styles which format the page and the displayed quotes.

Project Instructions
To complete this project, follow the instructions below. If you get stuck, ask a question in the community.
 6 steps
•	Create an array of JavaScript objects to hold the data for your quotes. Name the array quotes. The quotes array should be accessible in the global scope.
•	Each quote object in the quotes array should have the following properties:
o	A quote property which contains a string: the text of the quote that will be displayed on the page.
o	A source property which contains a string identifying the creator of the quote. For example: "Mark Twain" or "Traditional Irish proverb.”
	An optional citation property which contains a string identifying where the quote comes from, like a speech or publication. For example, "Famous Anonymous Jokes." If there is no known publication, do not include this property on the object.
	An optional year property which contains a number identifying the date of the quote. For example, 1997. If there is no known date, then do not include this property on the object.
•	Create a function named getRandomQuote which:
o	selects a random quote object from the quotes array
o	returns the randomly selected quote object
•	Create a function named printQuote which follows these rules:
o	printQuote calls the getRandomQuote function and stores the returned quote object in a variable
o	printQuote constructs a string containing the different properties of the quote object using the following HTML template:
o	printQuote doesn't add a for a missing citation or a if the year property is missing
o	printQuote displays the final HTML string to the page. You can use this JS snippet to accomplish that: document.getElementById('quote-box').innerHTML
•	Add comments to your code.
•	Before you submit your project for review, make sure you can check off all of the items on the Student Project Submission Checklist. The checklist is designed to help you make sure you’ve met the grading requirements and that your project is complete and ready to be submitted!
________________________________________
NOTE: It’s good practice to check your project for cross browser compatibility. We recommend making sure your project looks and functions as expected in at least 3 different browsers.

Project Instructions
To complete this project, follow the instructions below. If you get stuck, ask a question in the community.
 6 steps
•	Create an array of JavaScript objects to hold the data for your quotes. Name the array quotes. The quotes array should be accessible in the global scope.
•	Each quote object in the quotes array should have the following properties:
o	A quote property which contains a string: the text of the quote that will be displayed on the page.
o	A source property which contains a string identifying the creator of the quote. For example: "Mark Twain" or "Traditional Irish proverb.”
	An optional citation property which contains a string identifying where the quote comes from, like a speech or publication. For example, "Famous Anonymous Jokes." If there is no known publication, do not include this property on the object.
	An optional year property which contains a number identifying the date of the quote. For example, 1997. If there is no known date, then do not include this property on the object.
•	Create a function named getRandomQuote which:
o	selects a random quote object from the quotes array
o	returns the randomly selected quote object
•	Create a function named printQuote which follows these rules:
o	printQuote calls the getRandomQuote function and stores the returned quote object in a variable
•	printQuote constructs a string containing the different properties of the quote object using the following HTML template: class="quote"> [quo                                                           
o	printQuote doesn't add a for a missing citation or a if the year property is missing
o	printQuote displays the final HTML string to the page. You can use this JS snippet to accomplish that: document.getElementById('quote-box').innerHTML
•	Add comments to your code.
•	Before you submit your project for review, make sure you can check off all of the items on the Student Project Submission Checklist. The checklist is designed to help you make sure you’ve met the grading requirements and that your project is complete and ready to be submitted!
________________________________________
NOTE: It’s good practice to check your project for cross browser compatibility. We recommend making sure your project looks and functions as expected in at least 3 different browsers.

**** EXTRA CREDIT *******
Add more properties to the quote object. For example, a tags property could include a list of "tags" like "humor", "business", or "politics" to categorize each quote.
When the quote changes, randomly change the background color of the page.
Don't display a random quote more than once until ALL quotes from the array have been displayed. To help reviewers (and yourself) verify that the quotes don’t repeat until they’ve all been displayed, log the quote to the console each time the “Show Another Quote” button is clicked.
Refresh the quote after a set amount of time. For example, every 30 seconds, make a new quote appear. (You can use the setInterval() or setTimeout() method to do this -- see the links in the “Additional Resources” section).
NOTE:
To get an "Exceeds Expectations" grade for this project, you'll need to complete each of the items in this section. See the rubric in the "How You'll Be Graded" tab above for details on how you'll be graded.
If you’re shooting for the "Exceeds Expectations" grade, it is recommended that you mention so in your submission notes.
Passing grades are final. If you try for the "Exceeds Expectations" grade, but miss an item and receive a “Meets Expectations” grade, you won’t get a second chance. Exceptions can be made for items that have been misgraded in review.
