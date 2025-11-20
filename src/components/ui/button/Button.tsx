
import "./button.css"

interface propsButton{
    children?:React.ReactNode
    onClick?: ()=>void
}

function Button({children}:propsButton){
    return(
        <>
            <button className="button">{children}</button>
        </>
    )
}

export {Button}