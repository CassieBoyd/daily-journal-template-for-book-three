const entryManager = {

  makeJournalEntryComponent(journalEntry) {
    // Create your own HTML structure for a journal entry
    return `
    <fieldset>
      <section>
        <h3>${journalEntry.concept}</h3>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.mood}</p>
        <p>${journalEntry.date}</p>
        <button id="delete--${journalEntry.id}" type="delete">Delete</button>
      </section>
    </fieldset>
    `
  }
}

export default entryManager