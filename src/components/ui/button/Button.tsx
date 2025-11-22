
import { useNavigate } from "react-router"

import "./button.css"

interface propsButton{
    children?:React.ReactNode
    onClick?: ()=>void
    variant:string
    nav?:string
    IdTask:string
    stateTask?:boolean
    // finalmente 'handleStateChange' me permite manejar el estado de la tarea, el boton recibe la el valor que hay en 'stateChange' declarada en el componente 'cardTask' y lo usa para ejecutar la logica al hacer un click
    handleStateChange?: (key:string)=>void

}

/* 
1- TaskPage entrega id de la tarea y maneja el cambia el state por la expresion !task.state
2- CardTask conecta el id que se consigue en TaskPage con el componente button que ejecutara la accion de cambiar el estado
3- Componenete 'Button' recibe a traves de CardTask la id de la tarea, //!sin ese parametro no sabria a que tarea realizar el cambio de estado 
*/

function Button({children,nav,IdTask,variant,handleStateChange}:propsButton){

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
    }

    // manejo el estado de la tarea 
        const handleState= ()=>{
            handleStateChange?.(IdTask)
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

            case 'statePendat':
                return <button className="button stateComplete" onClick={handleState}>
                            <img src="src/assets/images/like-svgrepo-com.svg" alt="" />
                        </button>

            case 'stateComplete':
                return <button className="button statePendat" onClick={handleState}>
                            <img src="src/assets/images/unlike-svgrepo-com.svg" alt="" />
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