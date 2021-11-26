import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Title = () => {

  const { user } = useContext(UserContext);

  return (
    <header className="title-bar">
      <Link className="link" to="/reviews">
        <h1 className="main-title">Board Game Zone</h1>
      </Link>
      <section className="home-profile">
        <h2 className="home-username">{user.username}</h2>
        <img className="home-image" src={user.img_url} alt={user.username} />
        <button className="home-button"><Link className="link" to="/" >Log Out</Link></button>
      </section>
    </header>
  )
}

export default Title;