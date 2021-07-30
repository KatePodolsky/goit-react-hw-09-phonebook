import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import ContactListItem from "../ContactListItem"
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

import styles from "./ContactList.module.css";

export default function ContactList() {
    const contacts = useSelector(contactsSelectors.getfilteredContacts);
    const dispatch = useDispatch();
    const onDeleteContact = (contactId) => dispatch(contactsOperations.deleteContact(contactId));
    return (
        <ul className={styles.contactList}>
            {contacts.map((contact) => (
                <ContactListItem key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
            ))}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
};

