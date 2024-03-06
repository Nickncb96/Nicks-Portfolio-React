import React from 'react';

const ContactForm = () => {
    return (
        <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
        </form>
    );
};

export default ContactForm;