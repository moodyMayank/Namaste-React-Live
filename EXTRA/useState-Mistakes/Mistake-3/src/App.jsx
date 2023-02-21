import React from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [user, setUser] = useState({
    name: "Mayank",
    email: "sample@gmail.com",
    images: ["profile.png", "cover.png"],
  });
  return (
    <div>
      <h2>User : </h2>
      <input placeholder="Enter a New Text... "></input>
      <button>Change UserName</button>
    </div>
  );
};

export default App;
