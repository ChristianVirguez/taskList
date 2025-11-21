import './CardTask.css'

interface CardTaskProps{
    idTask:string
    titleTask:string
    descripcion:string
    estado:boolean
}




function CardTask({idTask,titleTask,descripcion,estado}:CardTaskProps){


    return(
        <div className="container-task">
            <table key={idTask}>
                <thead>
                    <tr className='row-th'>
                        <th className='titleTask'>{titleTask}</th>
                        <th className='buttons-th'>botones</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className='descriptionTask' colSpan={2}>{descripcion}</td>
                    </tr>
                </tbody>

                <tfoot>
                    <tr>
                        <td className='estateTask' colSpan={2}>{estado ? 'completada' : 'pendiente'}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export {CardTask}