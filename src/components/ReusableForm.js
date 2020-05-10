import React from "react";

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
                <button type='submit'>{props.buttonText}</button>
        </React.Fragment>
    );
}

ReusableForm.PropTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
};

export default ReusableForm;