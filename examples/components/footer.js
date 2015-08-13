/**
Pure decorator connect to stores. Doesn't require explicitly passing in component
 @example
  @connectToStores(AppStore, someFn)
  class SomeComponent {
    ...
  }
*/
const cts = (stores, getState) => {
  return (Component) => class ConnectToStore extends React.Component {
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
  };
};
export default cts;
