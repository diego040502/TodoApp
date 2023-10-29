import { Todos } from './components/Todos.tsx'
import { IconBrandReact, IconBrandTypescript } from '@tabler/icons-react'
import { Form } from './components/Form.tsx'
import { useForm } from './hooks/useForm.ts'

function App() {
  const { todos, handleDelete, handleCompleted, handleAdd } = useForm()

  return (
    <main className='w-full h-[300px] flex flex-col items-center justify-center'>
      <div className='flex flex-row items-center'>
        <IconBrandReact className='w-[70px] h-[70px] text-sky-600 mx-[10px]' />
        <h1 className='text-[70px] text-blue-800 font-light'>todo</h1>
        <IconBrandTypescript className='w-[70px] h-[70px] text-blue-900 mx-[10px]' />
      </div>
      <Form handleAdd={handleAdd} />
      <div className='mt-[20px] w-[400px] h-auto'>
        <Todos
          handleDelete={handleDelete}
          handleComplete={handleCompleted}
          todos={todos} />
      </div>
    </main>
  )
}

export default App
