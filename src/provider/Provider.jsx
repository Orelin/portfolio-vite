import { v4 as uuidv4 } from "uuid"
import { createContext } from "react"


const bbdd = {
    header : {
        menu : [
            { id : uuidv4(), title : "Home", href : "#"},
            { id : uuidv4(), title : "Projects", href : "#Projects"},
            { id : uuidv4(), title : "Download CV", href : "https://drive.google.com/uc?export=download&id=1vc1EbK2VqjgdC4tjgt0e1CEw9oDZZKx2"},
            { id : uuidv4(), title : "Contact", href : "https://wa.link/z3jqcm"},
        ],
        rrss : [
            { id : uuidv4(), title : "Linkedin", href : "https://github.com/Orelin", icono : "Linkedin"},
            { id : uuidv4(), title : "Github", href : "https://www.linkedin.com/in/dahian-sosa/", icono : "Github"},
            { id : uuidv4(), title : "Download CV", href : "https://drive.google.com/uc?export=download&id=1vc1EbK2VqjgdC4tjgt0e1CEw9oDZZKx2", icono : "Download CV"}
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