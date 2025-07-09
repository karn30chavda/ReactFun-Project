import UserContext from "../context/userContext"
import { useState } from "react"

const UseContextProvider = ({children}) => {
  const  [data, setData] = useState(null)
  return (
    <UserContext.Provider value={{data, setData}}>
     {children}
    </UserContext.Provider>
    
  )
}

export default UseContextProvider
