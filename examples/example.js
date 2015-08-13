import React from 'react';
import _ from 'lodash';
import Footer from '../components/footer';
import ColorChanger from '../components/color-changer';
import AppStore from '../../stores/ApplicationStore';

const PropTypes = React.PropTypes;

const styles = {
  fontStyle: {
    textTransform: 'capitalize'
    color: '#FFFFFF'
  }
};

const EgoBoost5000 = React.createClass({
  propTypes: {
    fontStyle: PropTypes.object
  },
  getInitialState: function() {
    return {userName: 'Jem'};
  },
  updateState(payload) {
    const name = payload.name || 'stranger';
    this.setState({
      userName: name
    });
  },
  componentDidMount() {
    AppStore.addChangeListener(this.updateState);
  },
  componentWillUnmount() {
    AppStore.removeChangeListener(this.updateState);
  },
  render() {
    const blendedStyle = _.extend(styles.fontStyle, this.props.fontStyle);
    return (
      <div>
        <ColorChanger>
          <div>You're awesome,
            <span style={blendedStyle}>{this.state.name}</span>
          </div>
        </ColorChanger>
        <Footer />
      </div>
    );
  }
});

export default EgoBoost5000;
