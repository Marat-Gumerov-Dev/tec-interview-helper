import React from 'react';
import './title.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Title = ({
  tag, children, className, ...attrs
}) => {

  const classes = classNames(
    'title',
    className,
  );

  const Tag = tag ? tag: 'span';

  return (
    <Tag
      {...attrs}
      className={classes}
      >{children}</Tag>
  );
};

Title.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

Title.defaultProps = {
  tag: 'span',
  children: 'Lorem ipsum',
  className: '',
};


export default Title;