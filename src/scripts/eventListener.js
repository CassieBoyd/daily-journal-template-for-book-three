import renderDom from "./entriesDOM.js"
import API from "./api.js"


const eventListener = {
    // =================LISTEN FOR NEW JOURNAL ENTRY======================
    addToApi() {
        // Invoke the factory function, passing along the form field values to
        const newJournalEntry = renderDom.buildEntry()
        // console.log("newJournalEntry", newJournalEntry)
        API.postJournalEntry(newJournalEntry)
    },
    attachEventListenerToEntryButton() {

        // DOM is searched for tags and assigns them to variables
        const entryButton = document.querySelector("button")

        // Listens for a click on the button tag.
        entryButton.addEventListener("click", this.addToApi)

    },

    // ================LISTEN FOR EDIT OR DELETE===========================
    attachEventListenerToEntryLog() {

        // DOM is searched for tag with class of entryLog and assigns it to a variable.
        const entryLogButtons = document.querySelector(".entryLog")
        // console.log(entryLogButtons)

        // An event listener is attached to entryLogButtons which waits for a click before executing the function.
        entryLogButtons.addEventListener("click", () => {
            // console.log(event.target.id.split("--"))

            // if statement checks if the first element in the array from using .split is "delete". If so, the if statement executes.
            if (event.target.id.split("--")[0] === "delete") {

                // deleteJournalEntry is called from api.js with the id of the API entry as an argument. Event is the mouse click, target is what was clicked, the id is the id of what was clicked and .split is used on the id to create an array after the "--" is removed. [1] is the second element in the array, which is the id of the API entry.
                API.deleteJournalEntry(event.target.id.split("--")[1])


            } else if (event.target.id.split("--")[0] === "edit") {
                // console.log(event.target.id.split("--"))

                const eventId = event.target.id.split("--")[1]
                // getSingleEntry is called from api.js with the id of the API entry as an argument. See above "if" notes for further explanation.
                API.getSingleEntry(eventId)
                    .then((response) => {
                        console.log(response)

                        // Dot notation is used on "response" to get the values of the indicated keys. That value is then assigned to the appropriate tag on the DOM. This populates the form with the entry that needs to be edited.
                        document.querySelector("#concept-input").value = response.concept
                        document.querySelector("#entry-input").value = response.entry
                        document.querySelector(".mood").value = response.mood
                        document.querySelector("#date-input").value = response.date
                        // console.log(document.querySelector("#date-input").value)
                    })

                    // After form populates, .scrollTop scrolls to the top of the page where the form is.
                    .then(document.documentElement.scrollTop = 0)
                    .then(() => {
                        eventListener.attachEventListenerToSaveButton(eventId)
                    })
            }
        })
    },
    // =====================LISTEN FOR SAVE=============================
    attachEventListenerToSaveButton(id) {
        const saveButton = document.querySelector("#save")
        saveButton.addEventListener("click", () => {
            // console.log(event)
            API.editJournalEntry(id, renderDom.buildEntry())
                .then(API.getJournalEntries)
                .then(response => {
                    renderDom.renderJournalEntries(response)
                })
                .then(() => {
                    document.querySelector("#concept-input").value = ""
                    document.querySelector("#entry-input").value = ""
                    document.querySelector(".mood").value = ""
                    document.querySelector("#date-input").value = ""
                })
        })
    }
}

export default eventListener