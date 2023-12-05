//? JS
let container = document.getElementById("react-container");

ReactDOM.render("Hello", container);

let h1_tag = document.createElement("h1");

h1_tag.innerText = "Hello , From Js";

container.append(h1_tag);

//* React

// iteration 1

h12 = React.createElement("h1", { id: "h1-tag" }, "Hello, From React");

ReactDOM.render(h12, container);

// iteration 2

function ReactContainer() {
  let div_tag1 = React.createElement(
    "div",
    { id: "h1-tag" },
    "Hello",
    React.createElement("div", null, "Welcome to react")
  );
}

// iteration 3

class KalviumContainer extends React.Component {
  render() {
    return React.createElement(
      "div",
      { id: "h1-tag" },
      "Hello!",
      React.createElement("div", null, "Welcome to react")
    );
  }
}

let container2 = document.getElementById("react-container");
ReactDOM.render(React.createElement(KalviumContainer), container);
