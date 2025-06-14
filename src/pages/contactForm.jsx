import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Data:', formData);
        // You can connect this to backend/API later
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <label style={styles.label}>First Name*</label>
            <input
                required
                type="text"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                style={styles.input}
            />

            <label style={styles.label}>Last Name*</label>
            <input
                required
                type="text"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                style={styles.input}
            />

            <label style={styles.label}>Email*</label>
            <input
                required
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
            />

            <label style={styles.label}>Subject*</label>
            <input
                required
                type="text"
                name="subject"
                placeholder="Project Collaboration"
                value={formData.subject}
                onChange={handleChange}
                style={styles.input}
            />

            <label style={styles.label}>Message*</label>
            <textarea
                required
                name="message"
                rows="5"
                placeholder="Tell us about your project or inquiry..."
                value={formData.message}
                onChange={handleChange}
                style={styles.textarea}
            />

            <button type="submit" style={styles.button}>Send Message</button>
        </form>
    );
};

const styles = {
    form: {
        backgroundColor: '#1a1a1a',
        color: 'white',
        padding: '30px',
        maxWidth: '600px',
        borderRadius: '12px',
        border: '1px solid rgba(128, 128, 128, 0.409)',
        fontFamily: 'Arial'
    },
    label: {
        marginBottom: '6px',
        display: 'block',
        color: '#00C8F9',
        fontWeight: 'bold'
    },
    input: {
        width: '100%',
        padding: '10px',
        marginBottom: '20px',
        borderRadius: '6px',
        border: 'none',
        backgroundColor: '#2a2a2a',
        color: 'white'
    },
    textarea: {
        width: '100%',
        padding: '10px',
        marginBottom: '20px',
        borderRadius: '6px',
        border: 'none',
        backgroundColor: '#2a2a2a',
        color: 'white'
    },
    button: {
        backgroundColor: '#00C8F9',
        color: 'black',
        padding: '12px 20px',
        border: 'none',
        borderRadius: '6px',
        fontWeight: 'bold',
        cursor: 'pointer'
    }
};

export default ContactForm;
