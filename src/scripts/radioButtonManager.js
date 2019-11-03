import API from "./api.js"
import renderDom from "./entriesDOM.js"

const handleButtonEvent = {

    buttonEventListener() {

        // Finding all tags with a name of "Button" and assigning them to a variable.
        const RadioButtons = document.getElementsByName("Button")

        // .forEach method is used on RadioButtons to add and event listener to each button.
        RadioButtons.forEach((button) => {

            // Event listener waits for a click then executes the function.
            button.addEventListener("click", () => {
                // console.log(event)

                // Calling getJournalEntries from api.js. Returns an array.
                API.getJournalEntries()

                // .then waits for the function to resolve then passes the returned data into the next function.
                .then((response) => {
                    // console.log(response)

                    // .filter method is called on the returned data (response) and the result (which is an array) is stored in a variable. "entry" is taco. 
                   const filterEntries = response.filter( (entry) => {
                        // console.log("entry.mood", entry.mood)
                        // console.log("button.id", button.id)

                        // Entries are evaluated to either true or false. True entires are stored in the filterEntries array.
                        return entry.mood === button.id
                    })

                    // renderJournalEntries is called from entriesDOM.js and the filterEntries array is passed as the argument. This renders the filtered entries to the DOM.
                    renderDom.renderJournalEntries(filterEntries)
                })
            })
        })
        // console.log(RadioButtons)
    }

}

export default handleButtonEvent