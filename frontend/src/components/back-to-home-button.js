import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from "semantic-ui-react";

const BackToHomeButton = () => {
  return (
    <Link to="/spy-pixel">
      <Icon size="big" color="black" name="left arrow" />
    </Link>
  )
}

export default BackToHomeButton;
