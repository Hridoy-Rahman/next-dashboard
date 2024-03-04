import React from 'react';
import PropTypes from 'prop-types';
import styles from '@/app/ui/dashboard/buttons/buttons.module.css';

const Button = ({ buttonType, customClass,name }) => {
    const buttonClassName = `${styles.button} ${customClass}`;

    return (
        <div>
            <button type={buttonType} className={buttonClassName}>{name}</button>
        </div>
    );
};

Button.propTypes = {
    buttonType: PropTypes.string,
    customClass: PropTypes.string
};

export default Button;
