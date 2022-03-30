# React: Madlibs!
In this exercise, you will explore handling input events and a more complex component data flow by creating a UI for a [Madlibs app](http://www.madlibs.com/). Much of the app has been scaffolded but you'll be responsible for connecting a few wires to complete the flow of data, and rendering appropriate HTML content.

Make sure to run `npm install` from the app's root directory to set up this project.

`data/MadLibs.js` contains our Mad Lib data objects, stored in an array. You do not need to change anything in this file directly, but make sure you read that data file to understand how the data is stored and accessed. Each MadLib object has three properties that you'll utilize:
- `title` = the title of the Mad Lib
- `words` = an array of fill-in-the-blank word objects. These objects currently contain a `key` and `label` properties. 
- `getText()` = a function that returns the Mad Lib story text.

`App.js` has already been coded up for you. Your task is to modify logic in the `Story.js`, `WordForm.js`, and `Selector.js` child components. **You do not need to modify App.js at all**

## Story Component
The `Story.js` component should simply display the value returned from the `getText()` function from the `MadLib` object.

## WordForm Component
`WordForm.js` should render a list of text inputs elements for all the words that a Mad Lib needs.
- Create a series of text inputs based on the Mad Lib data's `words` array, and use the `label` property in each word object for the value of the input's placeholder attribute (to prompt the user for relevant input values)
- Handle the `onChange` event for each input to capture the word that the user is typing into the text input, and have it instantly displayed it in the `Story` component.
- Figure out how to properly map the controls you create to the words that need to be updated in the Mad Libs data.

## Selector Component
Right now, we only have the first Mad Lib showing up on the page. The `Selector.js` component should control which Mad Lib story we are working with. There are three Mad Libs to choose from in the `MadLibs.js` file. 
- Populate the `<select>` html element with options based on the current Mad Lib
- Handle the `onChange` event from the select dropdown to update the selected Mad Lib and make the appropriate wire connections with the rest of the application.

