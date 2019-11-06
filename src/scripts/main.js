// Import statements to allow access to modules
import API from "./api.js";
import renderDom from "./entriesDOM.js";
import eventListener from "./eventListener.js";
import handleButtonEvent from "./radioButtonManager.js";

// Calling getJournalEntries method on API object from api.js
API.getJournalEntries()

  // .then waits for getJournalEntries to resolve then sends the JSON response to renderDom where it's passed into renderJournalEntries
  .then(response => renderDom.renderJournalEntries(response));

// Calling event listeners for various buttons
eventListener.attachEventListenerToEntryButton();

handleButtonEvent.buttonEventListener();

eventListener.attachEventListenerToEntryLog();
