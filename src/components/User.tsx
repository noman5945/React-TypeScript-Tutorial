import { useContext } from "react";
import { UserContext } from "./Context/UserContext";

const User = () => {
  const { user, setUser } = useContext(UserContext);
  const handleLogin = () => {
    setUser({
      uName: "Mews",
      email: "mews@example.com",
    });
  };

  const handleLogOut = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogOut}>LogOut</button>
      <p>{user?.uName}</p>
      <p>{user?.email}</p>
    </div>
  );
};

export default User;
