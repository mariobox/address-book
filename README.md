# address-book
This is an address book application part of the [Object Oriented JavaScript course at Epicodus](https://www.learnhowtoprogram.com/intro-to-programming/object-oriented-javascript/address-book-constructor). While they developed the application with jQuery, I decided to code it using pure JavaScript, as a way to practice the concept of Classes (an important new development with ES6 JavaScript.

The app does the following:

1. Opens a user interface (web page) showing a form where user can input contacts.
2. Provides the option of adding additional addresses for each contact (e.g. home and work).
3. Submits the form.
4. Shows a list of clickable contact names. 
5. Clicking on a contact displays all information associated to that contact in the right section of the page.
6. Upon submission of each contact, input fields clear automatically and all the additional addresses' input fields disappear.

Since this is a front end project, the form is not actually submitted. However, since the default behaviour of a web page is to refresh itself after hitting the Submit button, we have to use the <code>event.preventDefault()</code> method to prevent this from happening (otherwise, all our information would be lost and the application would be unworkable).

[Live Demo](https://mariobox.github.io/address-book/)


