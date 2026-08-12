import { useState } from "react";

function Contact () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState (false);

    function handleSubmit (event) {

        event.preventDefault();
        console.log(name);
        console.log(email);
        console.log(message);

        setSubmitted(true);
    }
    return (
        <>
    <form onSubmit={handleSubmit}>
       <label htmlFor="name">Name</label>
        <input 
        id="name" 
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)} 
        />
        <label htmlFor="email">Email</label>
        <input
        id="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        />
     <label htmlFor="message">Message</label>
        <textarea
        id="message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        />
        <button type="submit">Send Message</button>
        </form>
        {submitted && (
            <p>Thanks! Your Message has been received.</p>
        )}
        </>
    );
}
export default Contact;
