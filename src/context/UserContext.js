import { createContext , useState } from "react";

const UserConText = createContext({});

const UserContextProvider = ({children}) => {
    const [auth , setAuth] = useState({})



    return (
        <UserConText.Provider value={{auth , setAuth}}>
            {children}
        </UserConText.Provider>
    )
}

export default UserConText

export {UserContextProvider}