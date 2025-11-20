
import { Button } from "../../components/ui/button/Button.tsx"
import"./homepage.css"

function HomePage(){

    return(
        <>
            <div className="home-content">
                <div className="home-box">
                    <h1>¡Bienvenido/a, Usuario/a!</h1>
                    <p>Organiza tus objetivos en tareas pequeñas para alcanzar tus <strong>META</strong>. Crea nuevas tareas para comenzar o consulta tus tareas si ya las creaste.</p>
                    <div className="button-box">
                        <Button variant="primary" nav="/new-task">Crear nueva Tarea</Button>
                        <Button variant="secundary" nav="/task">Ver mis tareas</Button>
                    </div>
                </div>

            </div>  
        </>
    )
}

export {HomePage}