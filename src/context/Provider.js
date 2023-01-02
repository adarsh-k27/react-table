import React from 'react'
import {useReducer} from 'react'
import GlobalContext from './index'
import {
    UserReducer
} from './reducer'
let initialState={
    ColumnFilter:"",
    catogery:"",
}
function Provider({children}) {
    const [state, dispatch] = useReducer(UserReducer, initialState)
    const AddForFilter=(DATA)=>{
        dispatch({
            type: "ADD",
            payload:DATA
        })
    }
  return (
    <GlobalContext.Provider value={{state,AddForFilter}} >
      {children}
    </GlobalContext.Provider>
  )
}

export default Provider