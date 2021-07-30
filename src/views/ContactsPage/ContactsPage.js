import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from "../../components/ContactForm";
import ContactList from "../../components/ContactList";
import FilterContacts from "../../components/FilterContacts";
import Loading from "../../components/Loader";

import { contactsOperations, contactsSelectors } from '../../redux/contacts';

export default function ContactsPage() {
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts())
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <FilterContacts />
      {isLoadingContacts && <Loading />}
      <ContactList />
    </>
  )
}








