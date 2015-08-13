import React from 'react';

const cts = (Component, stores, getState) => {
  class ConnectToStore extends React.Component {
    constructor() {
      super();
      this.state = getState();
      this.handleChange = this.handleChange.bind(this);
    }
    componentWillMount() {
      if (Array.isArray(stores)) {
        stores.forEach(store => {
          store.addChangeListener(this.handleChange);
        });
      } else {
        stores.addChangeListener(this.handleChange);
      }
    }
    componentWillUnmount() {
      if (Array.isArray(stores)) {
        stores.forEach(store => {
          store.removeChangeListener(this.handleChange);
        });
      } else {
        stores.removeChangeListener(this.handleChange);
      }
    }
    handleChange() {
      this.setState(getState());
    }
    render () {
      return <Component {...this.props} {...this.state}/>;
    }
  }

  return ConnectToStore;
};

export function decorator(Component, stores, getState) {
  return cts(...Array.from(arguments), true);
}

export default cts;
