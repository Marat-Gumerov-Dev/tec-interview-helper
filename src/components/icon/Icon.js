import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './icon.scss';


const Icon = ({
  className, onClick,
}) => {

  const classes = classNames(
    className,
  );

  return(
    <i className = {
      classes
    }
       onClick={onClick}></i>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  onclick: PropTypes.func,
};

Icon.defaultProps = {
  className: 'icon',
  onClick: () => {},

};

export default Icon;