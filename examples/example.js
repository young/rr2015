import React, { PropTypes } from 'react';
import Footer from '../components/footer';
import ColorChanger from '../components/color-changer';
import AppStore from '../../stores/ApplicationStore';
import connectToStore from '../../decorators/connectToStore';

const styles = {
  fontStyle: {
    textTransform: 'capitalize',
    color: '#FFFFFF'
  }
};

const setState = function() {
  return {
    userName: AppStore.getName()
  };
};

@connectToStore(AppStore, setState)
class EgoBoost5000 extends React.Component {
  static propTypes = {
    fontStyle: PropTypes.object,
    userName: PropTypes.string
  }

  constructor() {
    super();
  }

  render() {
    const {fontStyle, userName} = this.props;
    const blendedStyle = {...styles.fontStyle, ...fontStyle};
    return (
      <div>
        <ColorChanger>
          <div>You're awesome,
            <span style={blendedStyle}>{userName}</span>
          </div>
        </ColorChanger>
        <Footer />
      </div>
    );
  }
}

export default EgoBoost5000;
