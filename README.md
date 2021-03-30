Madlibs!
===================
In this exercise, you will explore handling input events and a more complex component data flow by creating a UI for the [Madlibs game](http://www.madlibs.com/). Much of the app has been scaffolded - you'll be responsible for connecting a few wires to complete the flow of data, and rendering appropriate HTML.

Note: Make sure to run `npm install` from the app's root to get the necessary node modules on your local machine.

`madlibs/MadLibs.js` contains an array of MadLib objects. Don't change anything in this file. A MadLib object has three properties that you'll utilize:
* `title` - the title of the Madlib
* `words` - an array of fill-in-the-blank word objects. These objects contain a `key`, `label`, and `value` property that you'll need.
* `getText()` - a function that returns the Madlib text


Wiring up WordForm.js and App.js
-------------
* `WordForm.js` should render a list of text inputs for all the words that a mad lib needs, be able to capture the word you're typing into the text input, and display it on the Mad Lib. Most of this has been done for you, but it's up to you to read through the code and figure out what needs to be done
* When you create a list of text inputs, use the `label` property in the word object for the value of the input's [placeholder](http://www.w3schools.com/Tags/att_input_placeholder.asp) attribute
  * These text inputs should call the `onInputChange()` function in `WordForm.js` when a change event occurs and pass in the appropriate arguments that `onInputChange()` is expecting
* The `Story.js` component should simply display the value returned from the `getText()` function on the `MadLib` object.
  - The `Story` should only be displayed after all of the words required for the Mad Lib have been filled out. It's up to you to figure out how this works. (Hint: look inside `App.js`)

Additional Features
-------------
Right now, we only have the first Mad Lib showing up on the page. There are 3 in the `MadLibs.js` file. 
* Create a `<select>`/dropdown that allows a user to switch the selected MadLib to play
  * *Map* through the array in `this.state.madlibs` - gather the titles, and display those as the dropdown `<options>`.
* Using the `onChange` event, set the `selectedMadLib` object in `App.js`'s state to the selected MadLib.


Stuck? This [video](https://www.youtube.com/watch?v=Gpq53GmWugc) might help
