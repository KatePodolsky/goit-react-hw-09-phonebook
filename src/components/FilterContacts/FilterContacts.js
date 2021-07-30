import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { contactsSelectors, updateFilter } from '../../redux/contacts';

import styles from "./FilterContacts.module.css";

export default function FilterContacts() {
    const dispatch = useDispatch();

    const value = useSelector(contactsSelectors.getfilter);
    const onChange = useCallback((e) => {
        dispatch(updateFilter(e.target.value))
    }, [dispatch]);

    return (
        <label className={styles.filterName}>
            Filter by name
            <input type="text" value={value} onChange={onChange} className={styles.input} />
        </label>
    )
}
