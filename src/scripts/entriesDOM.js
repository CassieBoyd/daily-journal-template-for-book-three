
// Import statement so entryManager can be accessed
import entryManager from "./entryComponent.js"

// renderDom module for rendering journal entries to the DOM
const renderDom = {

  // Called on main.js and on api.js. Takes data from the API as a parameter.
  renderJournalEntries(entries) {
    let HtmlForAllEntries = ""
    entries.forEach(entry => {
      const entryHtml = entryManager.makeJournalEntryComponent(entry)
      HtmlForAllEntries += entryHtml
    })
    const logArticle = document.querySelector(".entryLog")
    logArticle.innerHTML = HtmlForAllEntries
  },
  // Factory function for returning an object. Targets the value of the input fields and assigns them to variables. The variables are then returned in an object.
  buildEntry () {
    const concept = document.querySelector("#concept-input").value
    const entry = document.querySelector("#entry-input").value
    const mood = document.querySelector(".mood").value
    const date = document.querySelector("#date-input").value
    console.log(concept, entry, mood, date)
    return {
      "concept": concept,
      "entry": entry,
      "mood": mood,
      "date": date
    }

  }
}

export default renderDom
