
import { useEffect, useState, type ChangeEvent } from "react"
import "./taskpage.css"

type Task = {
    title: string
    description?: string
    expiration: string
    state:string
    key: string
}

function Task(){

    
    const [listTask, setlistTask] = useState<Task[]>([])
    const [cont,setCont] = useState(1)
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

                <table className="table-task-box">
                    <tbody className="tbody-table">
                        {
                            listTask.map((t)=>{
                                return <tr key={t.key} className="tr-table">
                                    
                                            <td className="td-info-task">
                                                <div className="info-task-box">

                                                    <h3><u>{t.title}</u></h3>
                                                    <p>{t.description}</p>
                                                    <p>{t.expiration}</p>
                                                    <span className={t.state === "complete"? "complete": "pending"}> {t.state === "complete" ? "completada" : "pendiente"} </span>
                                                </div>
                                            </td>
                                            
                                            <td className="td-option">

                                                <div className="cel-container">

                                                    <button className="delete-botton" onClick={()=>{
                                                        setCont(cont-localStorage.length)
                                                        localStorage.removeItem(t.key)
                                                    }}>
                                                        borrar
                                                    </button>
                                                    
                                                    <form  className="radio-container">
                                                        <div className="radio-complete">
                                                            <input type="radio" name="state" value="complete"  id="done" onChange={handleChange} onClick={()=>{
                                                                done.state = "complete"
                                                                t.state = done.state
                                                            }}/>
                                                            <span>Completada</span>
                                                        </div> 
                                                        <div className={done.state === "pending" ? "hiden" : "radio-pending"}>
                                                            <input type="radio" name="state" value="pending" id="done" onChange={handleChange} onClick={()=>{
                                                                done.state = "pending"
                                                                t.state = done.state
                                                            }}/>
                                                            <span>Pendiente</span>
                                                        </div>
                                                    </form>
                                                    
                                                </div>
                                            </td>
                                        </tr>
                            })
                        }
                        
                    </tbody>
                </table>
                <span className={localStorage.length> 0 ? "info" : "hiden"}> * Fomato de fecha corresponde a AA-MM-DD</span>
            </div>
        </>
    )
}

export {Task}