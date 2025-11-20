
import { useState, type ChangeEvent, type FormEvent,} from "react"
import "./newtask.css"
import { useNavigate } from "react-router"

function NewTask(){

    const navigate = useNavigate()

    function handleNav (){
        navigate("/")
    }

    function handleSubmit(event:FormEvent){
        event.preventDefault()
    }

    const [task, setTask] = useState({title:"", description:"", expiration:"",state:"",key:"task-"+crypto.randomUUID()})

    function handleChange(event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){

        const {name , value} = event.target
        
        const newTask={
            ...task,
            [name]:value
        }

        setTask(newTask)
    }


    // debe haber un onCLick que guarde la info en el local storage
    function handleOnCLick(){
        const taskID= task.key
        localStorage.setItem(taskID,JSON.stringify(task));

        if(task.title && task.description && task.expiration){
            alert("Tu tarea ha sido guardado con exito. Seras redireccionado a tus tareas")
            navigate("/task")
        }else{
            alert("complete los campos obligatorios para continuar")
        }
    }



    return (
        <>
            <div className="newtask-container">
                <h2>Agregar Nueva Tarea</h2>
                <p>Complea los siguientes campos para crear tu nueva tarea</p>

                <form className="box-input" onSubmit={handleSubmit}>

                    <div className="task-title">
                        <legend>Titulo de la Tarea</legend>
                        <input type="text" name="title" placeholder="Ej. Revisar informes" onChange={handleChange} required/>
                    </div>

                    <div className="task-description">
                        <legend>Descripción</legend>
                        <textarea required name="description" id="description" placeholder="Detalles de la tarea, como objetivos, pasos a seguir, etc." onChange={handleChange}></textarea>
                    </div>

                    <div className="task-date-expiration">
                        <legend>Fecha de vencimiento</legend>
                        <input type="date" name="expiration" id="expiration"  onChange={handleChange} required/>
                    </div>

                    <div className="box-button">
                        <button className="back-botton" onClick={handleNav}>Atras</button>
                        <input type="submit" value="Guardar" onClick={handleOnCLick}/>
                    </div>

                </form>
            </div>
        </>
    )
}

export {NewTask}