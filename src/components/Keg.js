import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
    const { keg, sellPint } = props;
    return (
        <React.Fragment>
            <div onClick = {() => props.whenKegClicked(props.id)}>
                <h2>Name: {props.name}</h2>
                <h3>Brand: {props.brand}</h3>
                <h3>Price: {props.price}</h3>
                <h3>Alcohol Content: {props.alcohol}</h3>
                <button onClick={()=> sellPint(keg.id)}>Sell pint</button>
                <hr/>
            </div>
        </React.Fragment>
    );
}

Keg.defaultProps = {
    pintsLeft: 124
}

Keg.propTypes = {
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.string,
    alcohol: PropTypes.string,
    pintsLeft: PropTypes.number,
    id: PropTypes.string,
    whenKegClicked: PropTypes.func,
    sellPint: PropTypes.func,
}

export default Keg;