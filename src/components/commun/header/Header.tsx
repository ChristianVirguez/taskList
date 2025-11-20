
import { Link } from "react-router"
import "./header.css"

function Header (){
    return (
        <>
            <header>
                <div className="logo">
                    <h1>To do List 📈</h1>
                </div>
                <div className="links-content">
                    <div className="link-box">
                        <Link to={"/"}>Inicio</Link>
                        <Link to={"/task"}>Tus Tareas</Link>
                        <Link to={"/new-task"}>Crear Tarea</Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export {Header}