import { createContext , useState } from "react";

const UserConText = createContext();

const UserContextProvider = ({children}) => {
    const [user , setUser] = useState({
        phone :null,
        password :null,
    })



    return (
        <UserConText.Provider value={{user , setUser}}>
            {children}
        </UserConText.Provider>
    )
}

export default UserConText

export {UserContextProvider}