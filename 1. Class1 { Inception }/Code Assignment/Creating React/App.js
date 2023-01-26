const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1"
);
const heading2 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 2"
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);

// Code to inject React Code in HTML
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(container);
