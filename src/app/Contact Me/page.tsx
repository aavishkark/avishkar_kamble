import './contactme.css';
export default function ContactMe() {
    return (
        <div id='contactme' className="contactme-container">
        <h1 className="contactme-header">Contact Me</h1>
        <form className="form">
            <input
            type="text"
            placeholder="Your Name"
            />
            <input
            type="email"
            placeholder="Your Email"
            />
            <textarea
            placeholder="Your Message"
            ></textarea>
            <button className="form-btn">Send</button>
        </form>
        </div>
    );
}