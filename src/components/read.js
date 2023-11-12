import { useEffect, useState } from "react";
import Books from "./books";
import axios from "axios";

function Read() {
    // State to store the fetched data
    const [data, setData] = useState([]);

    useEffect(
        () => {
            // Effect runs once when the component mounts

            // Simulating a synchronous operation that takes some time
            // for (let i = 0; i < 1000000000; i++){}

                // Asynchronous operation using axios to fetch data from the server
                axios.get('http://localhost:4000/api/books')
                    .then(
                        // Callback function executed if the request is successful
                        (response) => {
                            // Set the fetched data to the state
                            setData(response.data.myBooks)
                        }
                    )
                    // Error message
                    .catch(
                        (error) => {
                            console.log(error);
                        }
                    );
        }, []); // The empty dependency array ensures that the effect runs only once on mount
    return (
        // JSX rendering
        <div>
            <h2>Hello from read component!</h2>
            <Books myBooks={data}></Books>
        </div>
    );
}
// Exporting the Read component as the default export
export default Read;
