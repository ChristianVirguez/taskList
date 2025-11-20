
import { useNavigate } from "react-router"
import "./button.css"

interface propsButton{
    children?:React.ReactNode
    onClick?: ()=>void
    variant:string
    nav:string
}

function Button({children,nav,variant}:propsButton){

    const navigate = useNavigate()
    
    function redireccion(){
        if (nav) {
            navigate(nav)
        }
    }


    function renderVariant(variant:string){

        switch (variant) {
            case 'primary':

                return <button className="button primary" onClick={redireccion}>{children}</button>

        
            case 'secundary':

                return <button className="button secundary" onClick={redireccion}>{children}</button>
        }

    }   





    return(
        <>
            {renderVariant(variant)}
        </>
            
    )
}

export {Button}