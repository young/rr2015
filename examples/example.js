import React, { PropTypes } from 'react';
import _ from 'lodash';
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
    name: AppStore.getName()
  };
};

@connectToStore(AppStore, setState)
class EgoBoost5000 extends React.Component {
  static propTypes = {
    fontStyle: PropTypes.object
  }

  constructor() {
    super();
    this.state = {userName: 'Jem'};
  }

  updateState(payload) {
    const name = payload.name || 'stranger';
    this.setState({
      userName: name
    });
  }

  componentDidMount() {
    AppStore.addChangeListener(this.updateState);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this.updateState);
  }

  render() {
    const blendedStyle = {...styles.fontStyle, ...this.props.fontStyle};
    return (
      <div>
        <ColorChanger>
          <div>You're awesome,
            <span style={blendedStyle}>{this.state.userName}</span>
          </div>
        </ColorChanger>
        <Footer />
      </div>
    );
  }
}

export default EgoBoost5000;
