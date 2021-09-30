/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import PropTypes from "prop-types";

export default function CardImage({ src, className, ...rest }) {
  return (
    <img
      {...rest}
      className={`w-full rounded-lg -mt-9 shadow-lg max-h-60 ${className}`}
      src={src}
    />
  );
}

CardImage.propTypes = {
  src: PropTypes.string.isRequired,
};
