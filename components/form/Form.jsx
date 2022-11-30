import React, {useRef, useState} from 'react';
import { RippleButton } from '../../components';
import emailjs from '@emailjs/browser';
import styles from './form.module.css';

const initialFormData = Object.freeze({
    fname: "",
    lname: "",
    email: ""
});

const Form = () => {
    const [formData, updateFormData] = React.useState(initialFormData);
    const [formErrors, setFormErrors] = useState({});
    const form = useRef();

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrorsTemp = validate(formData);
        const frm = document.getElementById('mailing-list');

        console.log("handleSubmit", Object.keys(formErrorsTemp))
        setFormErrors(formErrorsTemp);

        if (Object.keys(formErrorsTemp).length === 0) {
            console.log(formData);
            emailjs.sendForm('service_nkdxiez', 'template_xz9aslk', form.current, 'OcvajQKxrKEo713qk')
                .then((result) => {
                    console.log(result.text);

                    console.log("Message Sent");

                    frm.reset();

                    alert("Subscribed!");

                    resetForm();

                }, (error) => {
                    console.log(error.text);
                });
        }
    };

    const resetForm = () => {
        updateFormData(initialFormData);
    };

    const validate = (values) => {
        console.log("calling validate with: ", values);
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.fname) {
            errors.fname = "Name is required!";
        }
        if (!values.lname) {
            errors.lname = "Name is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        return errors;
    };

    return (
        <div className={styles.cyrilWebsite__formInput} id={"resources"}>
            <form id={"mailing-list"} ref={form} onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    type={"text"}
                    id={"fname"}
                    name={"fname"}
                    placeholder={"First Name"}
                    onChange={handleChange}
                    required
                />
                <p className={"errorMsg"}>{formErrors.fname}</p>
                <input
                    className={styles.input}
                    type={"text"}
                    id={"lname"}
                    name={"lname"}
                    placeholder={"Last Name"}
                    onChange={handleChange}
                    required
                />
                <p className={"errorMsg"}>{formErrors.lname}</p>
                <input
                    className={styles.input}
                    type={"text"}
                    id={"email"}
                    name={"email"}
                    placeholder={"Email Address"}
                    onChange={handleChange}
                    required
                />
                <p className={"errorMsg"}>{formErrors.email}</p>
                <RippleButton type={"submit"}>Subscribe</RippleButton>
            </form>
        </div>
    );
};

export default Form;