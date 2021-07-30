import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { authSelectors } from '../../redux/auth';

import styles from './Navigation.module.css';

export default function Navigation() {
    const isLoggedIn = useSelector(authSelectors.getIsAuthenticated)
    return (
        <nav>
            <NavLink
                to='/'
                exact
                className={styles.link}
                activeClassName={styles.activeLink}
            >
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink
                    to='/contacts'
                    exact
                    className={styles.link}
                    activeClassName={styles.activeLink}
                >
                    Сontacts
                </NavLink>)}
        </nav>)

};
