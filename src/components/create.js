import { useState } from "react";
import axios from "axios";

function Create() {
    // State to manage form inputs
    const [title, setTitle] = useState('');
    const [authors, setAuthors] = useState('');
    const [thumbnailUrl, setCover] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Logging form input values to the console
        console.log("Title: " + title +
            " Cover: " + thumbnailUrl +
            " Authors: " + authors);

        // Creating a book object with form input values
        const book = {
            title:title,
            cover:thumbnailUrl,
            author:authors
        }

        // Making an HTTP POST request to the server with the book data
        axios.post('http://localhost:4000/api/book',book)
        // Handling a successful response
        .then()
        // Handling an error response
        .catch();    
    }

    return (
        // JSX rendering
        <div>
            <h2>Hello from create component!</h2>
            {/* form of type submit, invoke onSubmit when button is clicked */}
            <form onSubmit={handleSubmit}>
                {/* taking user input for title */}
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                {/* taking user input for authors */}
                <div className="form-group">
                    <label>Add Book Authors: </label>
                    <input type="text"
                        className="form-control"
                        value={authors}
                        onChange={(e) => { setAuthors(e.target.value) }}
                    />
                </div>
                {/* taking user input for cover */}
                <div className="form-group">
                    <label>Add Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={thumbnailUrl}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>
                {/* submitting it somewhere */}
                <div>
                    <input></input><input type="submit" value="Add Book" />
                </div>
            </form>
        </div>
    );
}
// Exporting the Create component as the default export
export default Create;
