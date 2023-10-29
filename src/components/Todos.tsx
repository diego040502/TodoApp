import { TodoId, type ListOfTodos, type Todo as TodoType } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos,
  handleDelete: ({ id }: TodoId) => void,
  handleComplete: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ todos, handleDelete, handleComplete }) => {
  return (
    <ul className="h-auto p-[10px] border-solid border-[1px] border-blue-800 w-full
    rounded-[10px]">
      {
        todos.map(todo => (
          <li
            className="text-[18px] ml-[10px] font-light"
            key={todo.id}>
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              handleDelete={handleDelete}
              handleComplete={handleComplete} />
          </li>
        ))
      }
    </ul>
  )
}