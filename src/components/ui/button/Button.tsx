
import { useNavigate } from "react-router"

import "./button.css"

interface propsButton{
    children?:React.ReactNode
    onClick?: ()=>void
    variant:string
    nav?:string
    IdTask:string
}

function Button({children,nav,variant,IdTask}:propsButton){

    const navigate = useNavigate()
    
    // funcion que permite la redireccion a distintas pantallas, se usa en boton primary y secundary
    function redireccion(){
        if (nav) {
            navigate(nav)
        }
    }

    // funcion que permite eliminar una tarea segun su id, se usa en button delete
    function deleteTask(IdTask: string){
        localStorage.removeItem(IdTask)
        console.log("funcion");
        
    }


    function renderVariant(variant:string){

        switch (variant) {
            case 'primary':

                return <button className="button primary" onClick={redireccion}>{children}</button>

        
            case 'secundary':

                return <button className="button secundary" onClick={redireccion}>{children}</button>

            case 'delete':

                return <button className="button delete" onClick={()=>{deleteTask(IdTask)}}>
                            <img src="src/assets/images/trash-bin-delete-svgrepo-com.svg" alt="" />
                        </button>
        }

    }   





    return(
        <>
            {renderVariant(variant)}
        </>
            
    )
}

export {Button}