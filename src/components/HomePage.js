import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const HomePage = () => {

  const { user } = useContext(UserContext);
  
  return (
    <section>
       <h2>Welcome to the <i>Board Game Zone!</i></h2>
       <h3>The BGZ is the place to be to review your favourite (and least favourite!) board games and discuss them with your fellow BGZ members.</h3>
       <h3>Please login to get started!</h3>
       <section className="user-profile">
         <h2 className="username">{user.username}</h2>
         <img className="user-image" src={user.img_url} alt={user.username} />
         <button><Link to="/reviews" className="login-button">Login!</Link></button>
       </section>
    </section>
   
  )
}

export default HomePage;