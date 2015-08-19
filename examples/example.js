const React = require('react');
const Footer = require('../components/footer')
const ColorChanger = require('../components/color-changer')
const AppStore = require('../../stores/ApplicationStore');
const PropTypes = React.PropTypes;

const EgoBoost5000 = React.createClass({
  propTypes: {
    nameStyle: PropTypes.object
  },
  getInitialState: function() {
    return {name: 'Jem'};
  },
  updateState(payload) {
    const name = payload.name || 'stranger';
    this.setState({
      name: name
    });
  },
  componentDidMount() {
    AppStore.addChangeListener(this.updateState);
  },
  componentWillUnmount() {
    AppStore.removeChangeListener(this.updateState);
  },
  render() {
    return (
      <div>
        <ColorChanger>
          <div>You are awesome,
            <span style={this.props.nameStyle}>{this.state.name}</span>
          </div>
        </ColorChanger>
        <Footer />
      </div>
    );
  }
});

module.exports = EgoBoost5000;
