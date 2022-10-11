import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { contactsSelectors, contactsActions } from "redux/contacts";
import { FilterLabel, FilterInput } from './Filter.styled';

const Filter = () => {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        value={value}
        onChange={(e) => dispatch(contactsActions.changeFilter(e.target.value))}
      />
    </FilterLabel>
  );
};
export default Filter;

Filter.defaultProps = {
  value: "",
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
