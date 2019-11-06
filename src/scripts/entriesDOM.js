// Import statement so entryManager can be accessed
import entryManager from "./entryComponent.js";

// renderDom module for rendering journal entries to the DOM
const renderDom = {
  // Called on main.js and on api.js. Takes data from the API as a parameter.
  renderJournalEntries(entries) {
    let HtmlForAllEntries = "";

    // forEach is called on entries. Each entry is passed as a parameter.
    entries.forEach(entry => {
      // The value of passing "entry" as a parameter in makeJournalEntryComponent is assigned to a variable.
      const entryHtml = entryManager.makeJournalEntryComponent(entry);

      // Each entry gets added to the HtmlForAllEntries variable.
      HtmlForAllEntries += entryHtml;
    });

    // The entryLog class is found on the DOM and assigned to variable "logArticle"
    const logArticle = document.querySelector(".entryLog");

    // The value of HtmlForAllEntries is assigned to the innerHTML of "logArticle"
    logArticle.innerHTML = HtmlForAllEntries;
  },
  // Factory function for returning an object. Targets the value of the input fields and assigns them to variables. The variables are then returned in an object.
  buildEntry() {
    const concept = document.querySelector("#concept-input").value;
    const entry = document.querySelector("#entry-input").value;
    const mood = document.querySelector(".mood").value;
    const date = document.querySelector("#date-input").value;
    console.log(concept, entry, mood, date);
    return {
      concept: concept,
      entry: entry,
      mood: mood,
      date: date
    };
  }
};

export default renderDom;
