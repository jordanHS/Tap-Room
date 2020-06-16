import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditKeg (props) {
  const { ticket } = props;

  function handleEditKegForm(event) {
    event.preventDefault();
    props.onEditKeg({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcohol: event.target.alcohol.value, pintsLeft: 124, id: ticket.id});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditKegForm}
        buttonText="Update Keg"/>
    </React.Fragment>
  );
}

EditKeg.propTypes = {
  onEditTicket: PropTypes.func,
  sellPint: PropTypes.func,
};

export default EditKeg;