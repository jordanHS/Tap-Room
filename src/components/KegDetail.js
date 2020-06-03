import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props){
    const { keg, onClickingDelete} = props;
    return (
        <React.Fragment>
            <h1>Keg Details</h1>
            <h2>Name:{keg.name}</h2>
            <h3>Brand:{keg.brand}</h3>
            <h3>Price: {keg.price}</h3>
            <h3>Alcohol Content: {keg.alcohol}</h3>
            <h3>Pints left:{keg.pintsLeft}</h3>
            <button onClick={()=> onClickingDelete(keg.id)}>Remove Keg</button>
        </React.Fragment>
    );
}

KegDetail.propTypes = {
    keg: PropTypes.object,
    onClickingDelete: PropTypes.func
};

export default KegDetail;