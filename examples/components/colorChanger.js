import React from 'react';

const styles = {
  wrapper: {
    height: '100vh'
  }
};

const getRand = function() {
  return ~~(Math.random() * 257));
}

class ColorChanger extends React.Component {
  constructor() {
    super();
  }
  _changeBackground() {
    const randColor = `rgb(${getRand()}, ${getRand()}, ${getRand()})`;
    this.setState({color: randColor})
  }
  render() {
    return (
      <div style={styles.wrapper}>
        React Rally 2015
      </div>
    );
  }
}

export default ColorChanger;
