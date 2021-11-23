import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "Arnie J",
    img_url: "https://res.cloudinary.com/stuj89/image/upload/v1541934524/Arnold_J_Rimmer.jpg"
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      { children }
    </UserContext.Provider>
  )
}




