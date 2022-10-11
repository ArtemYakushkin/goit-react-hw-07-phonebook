import React, { useState, memo } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { contactsSelectors, contactsOperations } from "redux/contacts";
import { FormDesign, LabelDesign, InputDesign, AddBtn } from './Form.styled';

const Form = () => {
  const [state, setState] = useState({ name: "", number: "" });

  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const nameInputId = shortid.generate();
  const telInputId = shortid.generate();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contacts.find(({ name }) => name === state.name)) {
      alert(`${state.name} is already in contacts`);
      return;
    }

    dispatch(contactsOperations.addContact(state));
    reset();
  };

  const reset = () => {
    setState({ name: "", number: "" });
  };

  return (
    <FormDesign onSubmit={handleSubmit}>
      <LabelDesign htmlFor={nameInputId}>
        Name
        <InputDesign
          type="text"
          name="name"
          value={state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
          id={nameInputId}
        />
      </LabelDesign>

      <LabelDesign htmlFor={telInputId}>
        Number
        <InputDesign
          type="tel"
          name="number"
          value={state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
          id={telInputId}
        />
      </LabelDesign>
      <AddBtn type="submit">
        Add contact
      </AddBtn>
    </FormDesign>
  );
};

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

export default memo(Form);