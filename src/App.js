import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/userSlice";
import Header from "./components/Header";
import Email from "./components/Email";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users/1";

    fetch(url)
      .then((response) => {
        response.json();
      })
      .then((data) => dispatch(addUser(data)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <Header />
      <Email />
    </div>
  );
}

export default App;
