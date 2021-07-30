import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

import styles from './UserMenu.module.css';

export default function UserMenu() {
    const dispatch = useDispatch();

    const post = useSelector(authSelectors.getUserPost);

    const onLogout = useCallback(() => {
        dispatch(authOperations.logOut())
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <span className={styles.post}>Welcome, {post}</span>
            <button type="button" onClick={onLogout}>
                Logout
            </button>
        </div>
    );
}
