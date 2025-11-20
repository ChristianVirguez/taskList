import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { MainLayout } from './layout/MainLayout'
import { HomePage } from './pages/home/HomePage'
import './index.css'
import { Task } from './pages/task/TaskPage'
import { NewTask } from './pages/new_task/NewTaskPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <BrowserRouter>

      <Routes>

        <Route element={<MainLayout/>}>

          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/task' element={<Task/>}></Route>
          <Route path='/new-task' element={<NewTask/>}></Route>


        </Route>

      </Routes>

    </BrowserRouter>

  </StrictMode>,
)
