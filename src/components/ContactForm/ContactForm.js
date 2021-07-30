import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';

import { contactsSelectors, contactsOperations } from '../../redux/contacts';

import styles from "./ContactForm.module.css"

export default function ContactForm() {
    const initialState = {
        name: '',
        number: '',
    };

    const [state, setState] = useState(initialState);
    const nameInputId = shortid.generate();
    const numberInputId = shortid.generate();

    const dispatch = useDispatch();
    const contacts = useSelector(contactsSelectors.getAllContacts)
    const onSubmit = useCallback((name, number) => dispatch(contactsOperations.saveContact(name, number)), [dispatch]);


    const handleContactAdd = e => {
        const { name, value } = e.currentTarget;
        setState(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const checkingAnExistingContact = (state, contacts) => {
        const { name, number } = state;
        if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
            alert(`${name} is already in contacts`)
            return;
        }

        if (contacts.some(contact => contact.number === number)) {
            alert(`${number} is already in contacts under a different name`)
            return;
        }
        onSubmit(state);
    }

    const reset = () => {
        setState(initialState)
    };

    const handlesubmit = e => {
        e.preventDefault();
        checkingAnExistingContact(state, contacts);
        reset()
    }

    const { name, number } = state;
    return (
        <form onSubmit={handlesubmit} className={styles.form}>
            <label htmlFor={nameInputId} className={styles.property}>
                <span>Name</span>
                <input
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    className={styles.input}
                    onChange={handleContactAdd}
                    id={nameInputId}
                />
            </label>
            <label htmlFor={numberInputId} className={styles.property}>
                <span>Number</span>
                <input
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    className={styles.input}
                    onChange={handleContactAdd}
                    id={numberInputId}
                />
            </label>
            <button type="submit" className={styles.button}>
                Add contact
            </button>
        </form>
    )
}

// import React, { useState, useCallback } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import shortid from 'shortid';

// import { contactsSelectors, contactsOperations } from '../../redux/contacts';

// import styles from "./ContactForm.module.css"

// export default function ContactForm() {
//     const [name, setName] = useState('');
//     const [number, setNumber] = useState('');

//     const nameInputId = shortid.generate();
//     const numberInputId = shortid.generate();

//     const dispatch = useDispatch();
//     const contacts = useSelector(contactsSelectors.getAllContacts)
//     const onSubmit = useCallback((name, number) => dispatch(contactsOperations.saveContact(name, number)), [dispatch]);

//     const handleContactAdd = e => {
//         const { name, value } = e.currentTarget;
//         switch (name) {
//             case 'name':
//                 return setName(value);
//             case 'number':
//                 return setNumber(value);
//             default:
//                 return;
//         }
//     };

//     const checkingAnExistingContact = (name, number, contacts) => {
//         // const { name, number } = state;
//         if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
//             alert(`${name} is already in contacts`)
//             return;
//         }

//         if (contacts.some(contact => contact.number === number)) {
//             alert(`${number} is already in contacts under a different name`)
//             return;
//         }
//         onSubmit(name, number);
//     }

//     const reset = () => {
//         setName('');
//         setNumber('');
//     };

//     const handlesubmit = e => {
//         e.preventDefault();
//         checkingAnExistingContact(name, number, contacts);
//         reset()
//     }

//     return (
//         <form onSubmit={handlesubmit} className={styles.form}>
//             <label htmlFor={nameInputId} className={styles.property}>
//                 <span>Name</span>
//                 <input
//                     type="text"
//                     name="name"
//                     value={name}
//                     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                     title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//                     required
//                     className={styles.input}
//                     onChange={handleContactAdd}
//                     id={nameInputId}
//                 />
//             </label>
//             <label htmlFor={numberInputId} className={styles.property}>
//                 <span>Number</span>
//                 <input
//                     type="tel"
//                     name="number"
//                     value={number}
//                     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                     title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//                     required
//                     className={styles.input}
//                     onChange={handleContactAdd}
//                     id={numberInputId}
//                 />
//             </label>
//             <button type="submit" className={styles.button}>
//                 Add contact
//             </button>
//         </form>
//     )
// }





