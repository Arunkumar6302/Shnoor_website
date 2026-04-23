import { useState } from "react";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  company: "",
  message: ""
};

function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to submit your enquiry.");
      }

      setForm(initialForm);
      setStatus({
        type: "success",
        message: "Your enquiry has been received. The SHNOOR team will follow up shortly."
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong while sending your enquiry."
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Full name
        <input name="name" value={form.name} onChange={handleChange} required />
      </label>
      <label>
        Phone number
        <input name="phone" value={form.phone} onChange={handleChange} required />
      </label>
      <label>
        Email address
        <input name="email" type="email" value={form.email} onChange={handleChange} required />
      </label>
      <label>
        Company
        <input name="company" value={form.company} onChange={handleChange} />
      </label>
      <label>
        Project overview
        <textarea name="message" rows="5" value={form.message} onChange={handleChange} required />
      </label>

      <button className="primary-button" type="submit" disabled={sending}>
        {sending ? "Sending..." : "Submit enquiry"}
      </button>

      {status.message ? <p className={`form-status ${status.type}`}>{status.message}</p> : null}
    </form>
  );
}

export default ContactForm;
