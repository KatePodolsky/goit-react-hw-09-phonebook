import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import { authOperations } from '../../redux/auth';

import styles from './LoginPage.module.css';

export default function LoginPage() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogIn = () => dispatch(authOperations.logIn({ email, password }));


    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const reset = () => {
        setEmail('');
        setPassword('');
    };

    const handleSubmit = e => {
        e.preventDefault();
        onLogIn();
        reset();
    };

    return (
        <div>
            <h1 className={styles.title}>Log In</h1>

            <form
                onSubmit={handleSubmit}
                className={styles.form}
                autoComplete="off"
            >
                <label className={styles.label}>
                    Email
                    <input
                        type="email"
                        name="email"
                        value={email}
                        className={styles.input}
                        onChange={handleChange}
                    />
                </label>

                <label className={styles.label}>
                    Password
                    <input
                        type="password"
                        name="password"
                        value={password}
                        className={styles.input}
                        onChange={handleChange}
                    />
                </label>

                <button className={styles.button} type="submit">Log In</button>
            </form>
        </div>
    );
}

