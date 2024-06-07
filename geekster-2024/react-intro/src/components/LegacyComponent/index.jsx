import React from "react";
import PropTypes from "prop-types";

class LegacyCounter extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "john doe",
    };
  }

  // component lifecycle methods
  UNSAFE_componentWillMount() {}
  componentDidMount() {}
  shouldComponentUpdate() {}
  componentDidUpdate() {}

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

LegacyCounter.propTypes = {
  title: PropTypes.string,
};

export default LegacyCounter;
