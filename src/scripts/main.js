// Import statements to allow access to modules 
import API from "./api.js"
import renderDom from "./entriesDOM.js"
// import entryManager from "./entryComponent.js"

// Calling getJournalEntries from api.js
API.getJournalEntries()

// .then waits for getJournalEntries to resolve then sends the JSON response to renderDom me where renderJournalEntries 
    .then(response => renderDom.renderJournalEntries(response))

// const addToApi = event => {
// // Invoke the factory function, passing along the form field values
// const newJournalEntry = buildEntry()
// console.log(newJournalEntry)


    attachEventListenerToEntryButton()