
import { Link } from "react-router"
import { Button } from "../../components/ui/button/Button.tsx"
import"./homepage.css"

function HomePage(){

    return(
        <>
            <div className="home-content">
                <div className="home-box">
                    <h1>¡Bienvenido/a, Usuario/a!</h1>
                    <p>Organiza tus objetivos en tareas pequeñas para alcanzar tu <strong>META</strong>. Crea nuevas tareas para comenzar o consulta tus tareas si ya las creaste.</p>
                    <div className="button-box">
                        <Link to={"/task"}>
                            <Button children={"Ver mis tareas"}/>
                        </Link>
                        <Link to={"/new-task"}>
                            <Button children={"Crear nueva tarea"}/>
                        </Link>
                    </div>
                </div>

            </div>  
        </>
    )
}

export {HomePage}