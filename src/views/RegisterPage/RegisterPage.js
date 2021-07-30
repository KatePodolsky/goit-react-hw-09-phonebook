import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

import styles from './RegisterPage.module.css';


// const mapDispatchToProps = {
//     onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterPage);

export default function RegisterPage() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onRegister = () => dispatch(authOperations.register({ name, email, password }));

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };
    const reset = () => {
        setName('');
        setEmail('');
        setPassword('');
    };

    const handleSubmit = e => {
        e.preventDefault();
        onRegister();
        reset();
    };

    return (
        <div>
            <h1 className={styles.title}>Register now</h1>

            <form
                onSubmit={handleSubmit}
                className={styles.form}
                autoComplete="off"
            >
                <label className={styles.label}>
                    Name
                    <input
                        className={styles.input}
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </label>

                <label className={styles.label}>
                    Post
                    <input
                        className={styles.input}
                        type="email"
                        name="email"
                        value={email}
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

                <button className={styles.button} type="submit">Register now </button>
            </form>
        </div>
    );
}

