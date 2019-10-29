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

const attachEventListenerToEntryButton = () => {

    // DOM is searched for first button tag and assigns it to variable "entryButton"
const entryButton = document.querySelector("button")
const concept = document.querySelector("concept-input")
const entry = document.querySelector("entry-input")
const mood = document.querySelector("mood-input")
const dateField = document.querySelector("date-input")


// Listens for a click on the button tag.
entryButton.addEventListener("click", entryManager.makeJournalEntryComponent)
}