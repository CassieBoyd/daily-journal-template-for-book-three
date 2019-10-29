// Function definition
const API = {
  getJournalEntries () {

    // fetch does a GET call to get back data
      return fetch("http://localhost:3000/entries")

      // .then waits for the fetch call to complete then converts the data (response) into JSON format.
          .then(response => response.json())
  }
}

export default API
