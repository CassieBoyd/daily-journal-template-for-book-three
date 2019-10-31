// Function definition
const API = {
  getJournalEntries() {

    // fetch does a GET call to get back data
    return fetch("http://localhost:3000/entries")

      // .then waits for the fetch call to complete then converts the data (response) into JSON format.
      .then(response => response.json())
    // .then(response => console.log(response))
  },
  postJournalEntry(newJournalEntry) {
    // Use `fetch` with the POST method to add your entry to your API
    fetch("http://localhost:3000/entries", { // Replace "url" with your API's URL
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newJournalEntry)
    })
    // .then(() => {
    //   API.getJournalEntries()
    //     .then(response => renderDom.renderJournalEntries(response))
    // })
  }
}

export default API
