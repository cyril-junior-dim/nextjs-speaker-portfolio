import React, { useRef, useState } from 'react';
import { RippleButton } from '../../components';
import emailjs from '@emailjs/browser';
import styles from './cform.module.css';

const initialFormData = Object.freeze({
    name: "",
    email: "",
    subject: "",
    message: ""
});

const CForm = () => {
    const [formData, updateFormData] = React.useState(initialFormData);
    const [formErrors, setFormErrors] = useState({});
    const form = useRef();

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    };

    const resetForm = () => {
        updateFormData(initialFormData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrorsTemp = validate(formData);
        const frm = document.getElementById('contact-form');

        console.log("handleSubmit", Object.keys(formErrorsTemp))
        setFormErrors(formErrorsTemp);

        if (Object.keys(formErrorsTemp).length === 0) {
            console.log(formData);
            emailjs.sendForm('service_nkdxiez', 'template_s9vvpmr', form.current, 'OcvajQKxrKEo713qk')
                .then((result) => {
                    console.log(result.text);

                    console.log("Message Sent");

                    frm.reset();

                    alert("Form submitted");

                    resetForm();

                }, (error) => {
                    console.log(error.text);
                });
        }
    };

    const validate = (values) => {
        console.log("calling validate with: ", values);
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
            errors.name = "Name is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.subject) {
            errors.subject = "Subject is required!";
        }
        if (!values.message) {
            errors.message = "Message body is required";
        } else if (values.message.length < 100) {
            errors.message = "Message body must be more than 100 characters. Please include as much detail as possible" +
                "in order to receive a more comprehensive response.";
        }
        return errors;
    };

    return (
        <div className={styles.cformInput}>
            <h1>Leave a Message</h1>
            <form className={styles.contactForm} id={'contact-form'} ref={form} onSubmit={handleSubmit}>
                <input
                    id={"name"}
                    type={"text"}
                    name={"name"}
                    placeholder={"Name"}
                    onChange={handleChange}
                />
                <p className={"errorMsg"}>{formErrors.name}</p>
                <input
                    id={"email"}
                    type={"text"}
                    name={"email"}
                    placeholder={"Email Address"}
                    onChange={handleChange}
                />
                <p className={"errorMsg"}>{formErrors.email}</p>
                <input
                    id={"subject"}
                    type={"text"}
                    name={"subject"}
                    placeholder={"Subject Line"}
                    onChange={handleChange}
                />
                <p className={"errorMsg"}>{formErrors.subject}</p>
                <textarea
                    id={"message"}
                    name={"message"}
                    placeholder={"Message"}
                    onChange={handleChange}
                />
                <p className={"errorMsg"}>{formErrors.message}</p>
                <RippleButton type={"submit"}>Send</RippleButton>
            </form>
        </div>
    );
};

export default CForm;