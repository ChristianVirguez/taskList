
import { useEffect, useState, type ChangeEvent } from "react"
import "./taskpage.css"
import { CardTask } from "../../components/ui/cardTask/CardTask"

type Task = {
    title: string
    description: string
    expiration: string
    state:boolean
    key: string
}

function Task(){

    // este estado permite capturar los datos alojados en localStorage
    const [listTask, setlistTask] = useState<Task[]>([])
    // permite actulizar la lista de tareas cuando una se elimina
    const [cont,setCont] = useState(1)
    // permite que demos un estado de pendiente o completada al hacer click en input de estado 
    const [done, setDone] = useState({state:"pending"})

    function handleChange(event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){

            const {name , value} = event.target
            
            const newDone={
                ...done,
                [name]:value
            }
    
            setDone(newDone)

            console.log(event);
        }
        


    
    useEffect(()=>{
        
        const key = Object.keys(localStorage);

        
        const task:Task[]= key.map((k)=> JSON.parse(localStorage.getItem(k) as string));
        setlistTask(task);

        
        
    },[cont])
    
    console.log(listTask);

    
    
    return (
        <>
            <div className="task-list-container">
                <h1>Tus Tareas</h1>    

                <div className="table-task-box">
                        {
                            listTask.map(task=>{
                                return <CardTask
                                idTask={task.key}
                                titleTask={task.title}
                                descripcion={task.description}
                                estado={task.state}/>
                            })
                        }
                </div>
            </div>
        </>
    )
}

export {Task}