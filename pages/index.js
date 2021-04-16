import { useEffect, useState } from "react"



function Homepage() {
    const [message, setMessage] = useState("");

    useEffect(() => {

        async function fetchData() {
            await fetch("https://testing-app.onrender.com/api/header", { mode: "no-cors" })
            .then(res => res.json())
            .then(msg => setMessage(msg))
            .catch(err => null)
        }

        fetchData();
    })


    return (
        <div>
            <h1>Message from backend: {message}</h1>
        </div>
    )
}




export default Homepage