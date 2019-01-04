import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <p>Hello World</p>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector("#app")
);
