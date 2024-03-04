import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonType, customClass,name }) => {

    return (
        <div>
            <button type={buttonType} className={customClass}>{name}</button>
        </div>
    );
};

Button.propTypes = {
    buttonType: PropTypes.string,
    customClass: PropTypes.string
};

export default Button;
