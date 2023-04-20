import { v4 as uuidv4 } from "uuid"
import { createContext } from "react"


const bbdd = {
    header : {
        menu : [
            { id : uuidv4(), title : "Home", href : "#"},
            //{ id : uuidv4(), title : "Projects", href : "#"},
            { id : uuidv4(), title : "Contact", href : "#"},
            { id : uuidv4(), title : "About me", href : "#"}
        ],
        rrss : [
            { id : uuidv4(), title : "Linkedin", href : "#", icono : "Linkedin"},
            { id : uuidv4(), title : "Github", href : "#", icono : "Github"},
            { id : uuidv4(), title : "Download CV", href : "#", title : "Download CV"}

        ]
    }
}

export const GlobalContext = createContext()

export const Provider = ({children}) => {
    return (
        <GlobalContext.Provider value={ bbdd }>
            {children}
        </GlobalContext.Provider>
    )
}