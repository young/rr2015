import React from 'react';

const styles = {
  wrapper: {
    background: '#B3B0CC',
    position: 'fixed',
    bottom: '0'
  }
};

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={styles.wrapper}>
        React Rally 2015
      </div>
    );
  }
}

export default Footer;
