import React,  { Fragment } from 'react';

import Cell from '../Cell';
import './index.css';

// Now, you need to pass these cells to the child component and render them. 
// Style the cells in the parent component before passing them as props to 
// the child component.

const createCells = () => {
  const cells = [];
  for (let i = 0; i < 25; i++) {
    cells.push({
      id: i,
      active: Math.random() * 2 > 1 ? true : false,
    });
  }
  return cells;
};

class CellBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: createCells(),
      dancing: false
    };
  };

  updateCells = () => {
    this.setState({
      items: createCells()
    });
  };

  startDanceHandler = () => {
    setInterval(this.updateCells, 500);
    this.setState({
      dancing: true
    })
  };

  render() {
    return (
      <Fragment>
        <h1>Dancefloor rebuild with a lot of help with the PA Solution</h1>
        <div className='CellBox-container'>
          {this.state.items.map((item, i) => {
            return <Cell key={i} id={item.id} active={item.active} />;
          })}
        </div>
        <button onClick={this.startDanceHandler}>{this.state.dancing ? 'DANCE FASTER' : 'START TO DANCE!'}</button>
        <h3>Looks good, but I never would reach to do this App, by myself!</h3>
        <h3>It takes much more time on that to study for me, I guess!</h3>
      
      </Fragment>
    );
  }
}

export default CellBox;
