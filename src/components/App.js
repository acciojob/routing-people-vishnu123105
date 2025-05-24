
import React, { useEffect, useState } from "react";
import { Route, Switch, Link } from "react-router-dom";

const Home = () => {
  const [data, setDate] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(true);
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((res) => res.json())
      .then(setDate)
      .catch((err) => console.log(err))
      .finally(() => setIsloading(false));
  }, []);
  return isloading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <h1>Users List</h1>
      <ul>
        {data.map((e) => (
          <li key={e.id}>
            <Link to={`/users/${e.id}`}>{e.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

const User = () => {
  const [data, setDate] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const id = window.location.pathname.split("/").reverse()[0];
  console.log(id);

  useEffect(() => {
    setIsloading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then(setDate)
      .catch((err) => console.log(err))
      .finally(() => setIsloading(false));
  }, []);
  return isloading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <h1>User Details</h1>
      <p>Name: {data.name}</p>
      <p>Username:{data.username}</p>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <p>Website:{data.website}</p>
    </>
  );
};

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route  path="/users/:hr">
          <User/>
        </Route>
      </Switch>
    </div>
  );
};

export default App;