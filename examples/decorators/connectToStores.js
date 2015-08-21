import React from 'react';

/**
 * A higher order component that binds store change events and passes the
 * relevant data into the view as a prop.
 *
 * @example:
 *   As a decorator:
 *
 *   import {decorator as connectToStores} from 'Connect-to-Stores';
 *
 *   @connectToStores(SomeComponent, SomeStore, function(){})
 *   class SomeComponent {
 *     ...
 *   }
 *
 *   As a higher order component:
 *
 *   import connectToStores from 'Connect-to-Stores';
 *
 *   export default connectToStores(SomeComponent, SomeStore, function(){})
 *
 *
 * @param  {React.Component} Component The component to wrap
 * @param  {Array.<Object> | Object} stores The stores to watch for changes
 * @param  {function} getState Calculate values and return into view as props
 * @param  {Boolean} [decorate] If true, allow component to be used as a decorator
 * @return {React.Component}
 */
const cts = (Component, stores, getState, decorate) => {
  class ConnectToStore extends React.Component {
    constructor() {
      super();
      this.state = getState();
      this.handleChange = ::this.handleChange;
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
  if (decorate) {
    return () => ConnectToStore;
  }
  return ConnectToStore;
};

export function decorator(Component, stores, getState) {
  return cts(...Array.from(arguments), true);
}

export default cts;