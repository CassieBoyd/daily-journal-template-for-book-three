/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

import API from "./data.js"
import renderDom from "./entriesDOM.js"
import entryManager from "./entryComponent.js"

API.getJournalEntries()
    .then(response => renderDom.renderJournalEntries(response))

const addToApi = event => {
// Invoke the factory function, passing along the form field values
const newJournalEntry = buildEntry()
console.log(newJournalEntry)

// Use `fetch` with the POST method to add your entry to your API
fetch("http://localhost:3000/entries", { // Replace "url" with your API's URL
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newJournalEntry)
}).then(()=> {
    API.getJournalEntries()
    .then(response => renderDom.renderJournalEntries(response))
})
}
// Factory function for returning an object
 const buildEntry = () => {
    const concept = document.querySelector("#concept-input").value
    const entry = document.querySelector("#entry-input").value
    const mood = document.querySelector(".mood").value
    const dateField = document.querySelector("#date-input").value 
console.log(concept, entry, mood, dateField)
return {
    "concept": concept,
    "entry": entry,
    "mood": mood,
    "dateField": dateField
}

 }

const attachEventListenerToEntryButton = () => {

    // DOM is searched for tags and assigns them to variables
    const entryButton = document.querySelector("button")
    
     // Listens for a click on the button tag.
    entryButton.addEventListener("click", addToApi)
    }

    attachEventListenerToEntryButton()