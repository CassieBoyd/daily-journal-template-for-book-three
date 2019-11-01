import renderDom from "./entriesDOM.js"
import API from "./api.js"

const eventListener = {
    addToApi() {
        // Invoke the factory function, passing along the form field values to
        const newJournalEntry = renderDom.buildEntry()
        console.log("newJournalEntry", newJournalEntry)
        API.postJournalEntry(newJournalEntry)
    },
    attachEventListenerToEntryButton() {

        // DOM is searched for tags and assigns them to variables
        const entryButton = document.querySelector("button")

        // Listens for a click on the button tag.
        entryButton.addEventListener("click", this.addToApi)

    }
}

export default eventListener