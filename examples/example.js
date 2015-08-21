import React, { PropTypes } from 'react';
import Footer from '../components/footer';
import ColorChanger from '../components/color-changer';
import AppStore from '../../stores/ApplicationStore';
import connectToStores from '../decorators/connectToStores';

const getState = () => {
  return {
    userName: AppStore.getName()
  };
};

@connectToStores(AppStore, getState)
class EgoBoost5000 extends React.Component {
  static propTypes = {
    nameStyle: PropTypes.object,
    userName: PropTypes.string
  }

  static defaultProps = {
    userName: 'stranger'
  }

  render() {
    const { nameStyle } = this.props;
    return (
      <div>
        <ColorChanger>
          <div>You are awesome,
            <span style={nameStyle}>{this.state.name}</span>
          </div>
        </ColorChanger>
        <Footer />
      </div>
    );
  }
}


export default EgoBoost5000;
