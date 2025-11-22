
import { useEffect, useState} from "react"
import "./taskpage.css"
import { CardTask } from "../../components/ui/cardTask/CardTask"

type Task = {
    title: string
    description: string
    expiration: string
    state:boolean
    key: string
}

function TaskPage(){

    // este estado permite capturar los datos alojados en localStorage
    const [listTask, setlistTask] = useState<Task[]>([])

    useEffect(()=>{
        
        // funcion permite obetener datos desde el localStorage y setiarlo en listTask
        
        function obtenerDatos(){
            // obtenemos las keys de cada tarea
            const keys = Object.keys(localStorage);
            // iteramos las keys para dentro de un array para guardar en el estado
            const tasks:Task[]= keys.map((k)=> JSON.parse(localStorage.getItem(k) as string));
            setlistTask(tasks);
        }
        // ejecuto la funcion para obtener datos desde el localStorage
        obtenerDatos()
        
        // creo un intervalo para que se actualice la info en pantalla
        const intervalo = setInterval(obtenerDatos, .300)

        //permite que se ejecute la funcion de obtener datos
        return ()=>clearInterval(intervalo)
    },[])

    //'changeStateTask' recibe la key(id) de la tarea
    function changeStateTask(key:string){

        // itero la lista de tareas que ya existente
        setlistTask(previo=>previo.map(task=>{

            //! compara el key que recibimos como parametro y el key de las tareas dentro de la lista de tareas, si los id's coinciden se jecuta el sgte codigo, para actualizar los datos de al tarea
            if(task.key === key){

                // 'stateActualizado' crea una copia que guarda los datos que estaban previamente en la tarea previamente guardada.
                const stateActualizado:Task= {...task, state: !task.state} //* 'state:!task.state' cambia con cada click
                //! 'state: !task.state' me permite sobre escribir solo 'state' (false -> true || true -> false)

                // guardamos la tarea acutalizada en el localStorage
                localStorage.setItem(task.key, JSON.stringify(stateActualizado));
                
                // finalmente retornamos 'stateActualizado' para que se guarde con los valores nuevos dentro de la lista de tareas
                return stateActualizado;
                
            }

            //! si la igualdad no es verdadera retornamos el arreglo de tarea sin cambios
            return task
        }))
    }

    return (
        <>
            <div className="task-list-container">
                <h1>Tus Tareas</h1>    

                <div className="table-task-box">
                        {   
                            //! luego dentro de la iteracion de la 'listTask', le damos la funcion a la propiedad 'stateChange' que declaramos en el compoenente 'cardTask'
                            listTask.map(task=>{
                                return <CardTask
                                    idTask={task.key}
                                    titleTask={task.title}
                                    descripcion={task.description}
                                    estado={task.state}
                                    stateChange={changeStateTask}
                                />
                            })
                        }
                </div>
            </div>
        </>
    )
}

export {TaskPage}