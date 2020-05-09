import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props){
    const { keg, onClickingDelete} = props;
    return (
        <React.Fragment>
            <h1>Keg Details</h1>
            <h2>{keg.name}</h2>
            <h3>{keg.brand}</h3>
            <h3>{keg.price}</h3>
            <h3>{keg.alcohol}</h3>
        </React.Fragment>
    );
}

KegDetail.propTypes = {
    keg: PropTypes.object,
    onClickingDelete: PropTypes.func
};

export default KegDetail;