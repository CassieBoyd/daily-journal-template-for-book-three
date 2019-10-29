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

    const concept = document.querySelector("concept-input").value
    const entry = document.querySelector("entry-input").value
    const mood = document.querySelector("mood-input").value
    const dateField = document.querySelector("date-input").value
}

const attachEventListenerToEntryButton = () => {

    // DOM is searched for tags and assigns them to variables
    const entryButton = document.querySelector("button")
    
     // Listens for a click on the button tag.
    entryButton.addEventListener("click", addToApi)
    }