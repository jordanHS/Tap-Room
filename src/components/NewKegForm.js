import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewKegForm(props) {
    return(
        <React.Fragment>
            <form onSubmit={handleNewKegFormSubmission}/>
                <input
                    type='text'
                    name='name'
                    placeholder='Keg Name'/>
                <input
                    type='text'
                    name='brand'
                    placeholder='Brand Name'/>
                <input
                    type='text'
                    name='price'
                    placeholder='Price'/>
                <input
                    type='text'
                    name='alcohol'
                    placeholder='Alcohol Content'/>
        </React.Fragment>
    );

    function handleNewKegFormSubmission(event) {
        event.preventDefault();
        props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcohol: event.target.alcohol.value, id: v4()});
    }
}

NewKegForm.propTypes = {
    onNewKegCreation: PropTypes.func
};

export default NewKegForm;