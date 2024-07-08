import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/auth/authSlice";
import { useEffect } from "react";

const Home = () => {

    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    useEffect(() => {
        console.log(user);
    }, [user]);

  return (
      <div>
            <h1>Home</h1>
            <p>{user ? `Welcome, ${user}` : "Please log in"}</p>
    </div>
  )
}

export default Home;