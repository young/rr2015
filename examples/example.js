var React = require('react');
var _ = require('lodash');
var Footer = require('../components/footer')
var ColorChanger = require('../components/color-changer')
var AppStore = require('../../stores/ApplicationStore');
var PropTypes = React.PropTypes;

var styles = {
  fontStyle: {
    textTransform: 'capitalize'
    color: '#FFFFFF'
  }
};

var EgoBoost5000 = React.createClass({
  propTypes: {
    fontStyle: PropTypes.object
  },
  getInitialState: function() {
    return {userName: 'Jem'};
  },
  updateState(payload) {
    var name = payload.name || 'stranger';
    setState({
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
    var blendedStyle = _.extend(styles.fontStyle, this.props.fontStyle);
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

module.exports = EgoBoost5000;
