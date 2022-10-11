import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { contactsSelectors, contactsOperations } from "redux/contacts";
import { useEffect } from "react";
import { ListContacts, ItemContact, DelBtn, Loader } from './ContactsList.styled';

export default function ContactsList() {
  const contacts = useSelector(contactsSelectors.getFilteredContacts);
  const loaderContacts = useSelector(contactsSelectors.isLoadingContacts);

  const dispatch = useDispatch();

  const onDeleteContact = (id) =>
    dispatch(contactsOperations.deleteContact(id));

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      {loaderContacts && <Loader>Loading...</Loader>}
      {contacts.length === 0 ? (
        <div> No contacts </div>
      ) : (
        <ListContacts>
          {contacts.map(({ id, name, phone }) => (
            <ItemContact key={id}>
              {name}: {phone}
              <DelBtn type="button" onClick={() => onDeleteContact(id)}>
                Delete
              </DelBtn>
            </ItemContact>
          ))}
        </ListContacts>
      )}
    </>
  );
};



