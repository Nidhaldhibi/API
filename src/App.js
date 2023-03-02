import { useState, useEffect } from "react";
import "./App.css";
import UsersList from "./componnents/UsersList";
import axios from "axios";
function App() {
  const [usersList, setUserslist] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const getList = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(res.data);
      setIsLoading(false);
      setUserslist(res.data);
    } catch (err) {
      setIsLoading(false);
      console.log("error", err.message);
      setError(err.message);
    }
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <div className="containner">
      <div> Users list </div>

      <UsersList isLoading={isLoading} error={error} list={usersList} />
    </div>
  );
}

export default App;
