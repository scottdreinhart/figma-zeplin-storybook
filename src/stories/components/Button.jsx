import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

function handleClick() {
    console.log('handleClick()');
}

export const Button = ({ label, type = 'button', bgColor, fgColor, size }) => {
  let scale = 1;
  if (size === 'sm') scale = 0.75;
  if (size === 'md') scale = 1.0;
  if (size === 'lg') scale = 1.5;

  const style = {
        background: `${bgColor}`,
        color: `${fgColor}`,
        padding: `${scale * 0.5}rem ${scale * 1}rem`,
        border: 'none',
    };
  return (
    <button type={type} onClick={handleClick} style={style}>
            {label}
    </button>
  );
};


Button.propTypes = {
    type: PropTypes.arrayOf(['submit', 'button', 'reset']),
    label: PropTypes.string,
    bgColor: PropTypes.string,
    fgColor: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    handleClick: PropTypes.func,
};

Button.defaultProps = {
    type: 'button',
    label: 'Lorem Ipsum',
    bgColor: null,
    fgColor: 'white',
    size: 'md',
    onClick: undefined,
};
