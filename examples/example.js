import React, { PropTypes } from 'react';
import Footer from '../components/footer';
import ColorChanger from '../components/color-changer';
import AppStore from '../../stores/ApplicationStore';

class EgoBoost5000 extends React.Component {
  static propTypes = {
    nameStyle: PropTypes.object
  }

  constructor() {
    super();
    this.state = {name: 'Jem'};
  }

  updateState(payload) {
    const name = payload.name || 'stranger';
    this.setState({
      name: name
    });
  }

  componentDidMount() {
    AppStore.addChangeListener(this.updateState);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this.updateState);
  }

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
}


export default EgoBoost5000;
