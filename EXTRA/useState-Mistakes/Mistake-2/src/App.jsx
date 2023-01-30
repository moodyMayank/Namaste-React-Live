import React from "react";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState();
  // Second Way : Initialise the state variable
  // const [user, setUser] = useState({});

  // Third Way : Intialise with Exact Same Structure
  // const [user, setUser] = useState({
  //   name: "",
  //   email: "",
  //   images: [],
  // });

  // User Structure : Commenting it because we want user as null
  // user = {
  //   name: "Mayank",
  //   email: "sample@gmail.com",
  //   images: ["profile.png", "cover.png"],
  // };

  return (
    <div>
      <h1>Checking if H1 Printed or not</h1>
      {/* Wrong Code */}

      {/* <span>Username is : {user.name}</span> */}

      {/* Correct Code - Approach 1 */}
      {/* {user && <span>Username is : {user.name}</span>} \ */}

      {/* Correct Code - Approach 2 */}
      <span>Username is : {user?.name}</span>

      {/* Correct Code - Approach 3 */}
      {/* Initializing the useState Variable Above */}

      {/* Correct Code - Approach 4 */}
      {/* Initializing the useState Variable with the same Object Structure  */}
    </div>
  );
};

export default App;
