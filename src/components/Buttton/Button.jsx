import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, type, disabled, classButton, classText }) => {
  return (
    <button
      className={`py-[5px] px-[10px] bg-blue-500 ${classButton}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={`${classText} font-medium`}>{children}</span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  classButton: PropTypes.string,
  classText: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
};

export default Button;
