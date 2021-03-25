import React from 'react';

import './index.css';

const Cell = (props) => {
  const activityClass = props.active ? 'Cell-active' : 'Cell-inactive';
  return <div className={`Cell-container ${activityClass}`} />;
};

export default Cell;

// Change The Color Of One Cell
// The main idea behind of changing the color is that you add or 
// remove a class.

// <div class="cell"></div>
// If we want to change the color, we could for example:

// <div class="cell active"></div>
// In your CSS select the active class to set a different background color.
