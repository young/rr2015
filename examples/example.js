var React = require('react');
var Footer = require('../components/footer')
var ColorChanger = require('../components/color-changer')
var AppStore = require('../../stores/ApplicationStore');
var PropTypes = React.PropTypes;

var EgoBoost5000 = React.createClass({
  propTypes: {
    nameStyle: PropTypes.object
  },
  getInitialState: function() {
    return {name: 'Jem'};
  },
  updateState(payload) {
    var name = payload.name || 'stranger';
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
