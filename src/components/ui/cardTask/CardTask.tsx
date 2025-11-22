import { Button } from '../button/Button'
import './CardTask.css'

interface CardTaskProps{
    idTask:string
    titleTask:string
    descripcion:string
    estado:boolean
    // 'stateChange' permite recibir la funcion 'changeStateTask' que declaramos en taskPage para manejar el estado de la tarea, debemos pasarle la propiedad dentro de los parametro de 'CardTask', asi podra pasar el valor que toma en 'taskPage' (stateChange=changeStateTask) al boton que finalmente reflejara el cambio de estado de la tarea.
    stateChange: (key:string)=>void
}

function CardTask({idTask,titleTask,descripcion,estado,stateChange}:CardTaskProps){


        const pendant=  <div style={
            {
                width:'15%',
                height:'30px',
                margin:"0",
                background:"#f3ff50",
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                borderRadius:"18px"
            }
        }><p style={{margin:'0',color:"#454D5D"}}>Pendiente</p></div>


        const complete= <div style={
            {
                width:'15%',
                height:'30px',
                margin:"0",
                background:"#91ff87",
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                borderRadius:"18px"
            }
        }><p style={{margin:'0',color:"#454D5D"}}>Completada</p></div>

        
        
    return(
        <div className="container-task" key={idTask}>
            <table>
                <thead>
                    <tr className='row-th'>
                        <th className='titleTask'>{titleTask}</th>
                        <th className='buttons-th'>
                            <Button
                                variant={'delete'}
                                IdTask={idTask}
                            />
                            <Button
                                variant={estado?'statePendat':'stateComplete'}
                                IdTask={idTask}
                                stateTask={estado}
                                //! 'handleStateChange' es una propiedad declarada en el componente 'Button' que recibe el valor que toma 'stateChange' declarado en ''CardTas; que a su vez toma el valor de 'changeStateTask' declarada en TaskPage 
                                handleStateChange={stateChange}
                            />
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className='descriptionTask' colSpan={2}>{descripcion}</td>
                    </tr>
                </tbody>

                <tfoot>
                    <tr>
                        <td className='estateTask' colSpan={2}>
                            {estado ? complete : pendant }
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export {CardTask}