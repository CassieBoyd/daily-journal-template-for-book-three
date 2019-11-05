import renderDom from "./entriesDOM.js"

// API module, an object containing functions which are called methods when they're inside an object because why not?
const API = {
  // ===============================GET ALL===================================
  // Fetch GETs all journal entries from the API and converts them to JSON. Called on main.js
  getJournalEntries() {

    // fetch does a GET call to get back data
    return fetch("http://localhost:3000/entries")

      // .then waits for the fetch call to complete then converts the data (response) into JSON format.
      .then(response => response.json())
    // .then(response => console.log(response))
  },
  // =========================POST NEW=====================================
  // Fetch POSTs newJournalEntry to the API and clears the input fields once the fetch call completes.
  postJournalEntry(newJournalEntry) {

    // Use `fetch` with the POST method to add your entry to your API
    fetch("http://localhost:3000/entries", {

      // POST creates new data on the API.
      method: "POST",

      // Content-Type tells the API that the data is in JSON format.
      headers: {
        "Content-Type": "application/json"
      },

      // .stringify turns JSON into a string
      body: JSON.stringify(newJournalEntry)
    })

      // .then waits for fetch call to complete then fetches the data again using getJournalEntries. This causes the new post to be included on the DOM. Another .then targets the input fields and clears them out.
      .then(() => {
        API.getJournalEntries()
          .then(response => renderDom.renderJournalEntries(response))
          .then(() => {
            document.querySelector("#concept-input").value = ""
            document.querySelector("#entry-input").value = ""
            document.querySelector(".mood").value = ""
            document.querySelector("#date-input").value = ""
          })
      })
  },
  // ==========================DELETE ENTRY==================================
  // Fetch DELETEs deleteJournalEntry from the API and clears the input fields once the fetch call completes.
  deleteJournalEntry(id) {

    // Use `fetch` with the DELETE method to remove the entry from the API
    fetch(`http://localhost:3000/entries/${id}`, {

      // DELETE method deletes data from the API.
      method: "DELETE",

      // Content-Type tells the API that the data is in JSON format.
      headers: {
        "Content-Type": "application/json"
      }
    })

      // .then waits for fetch call to complete then fetches the data again using getJournalEntries. This causes the deleted post to be removed from the DOM. Another .then targets the input fields and clears them out.
      .then(() => {
        API.getJournalEntries()
          .then(response => renderDom.renderJournalEntries(response))
          .then(() => {
            document.querySelector("#concept-input").value = ""
            document.querySelector("#entry-input").value = ""
            document.querySelector(".mood").value = ""
            document.querySelector("#date-input").value = ""
          })
      })
  },
  // ============================EDIT ENTRY==================================
  editJournalEntry(id, editedJournalEntry) {

    // fetch does a GET call to get back data of the entry with a matching id.
    return fetch(`http://localhost:3000/entries/${id}`, {

      // PUT updates data on the API.
      method: "PUT",

      // Content-Type tells the API that the data is in JSON format.
      headers: {
        "Content-Type": "application/json"
      },

      // .stringify turns JSON into a string
      body: JSON.stringify(editedJournalEntry)
    })

      // .then waits for the fetch call to complete then converts the data (response) into JSON format.
      .then(response => response.json())
    // .then(response => console.log(response))
  },

  getSingleEntry(id) {
    // fetch does a GET call to get back data
    return fetch(`http://localhost:3000/entries/${id}`)

      // .then waits for the fetch call to complete then converts the data (response) into JSON format.
      .then(response => response.json())
  }
}

export default API
