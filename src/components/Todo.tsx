import { TodoId, type Todo as TodoType } from '../types'
import { IconBackspace } from '@tabler/icons-react'

interface Props extends TodoType {
  handleDelete: ({ id }: TodoId) => void,
  handleComplete: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, handleDelete, handleComplete }) => {
  return (
    <div className="w-full h-auto flex flex-row items-center ">
      <input type="checkbox"
        className="m-[10px] hover:cursor-pointer accent-white w-[15px] h-[15px]"
        checked={completed}
        name="completed"
        onChange={(event) => { handleComplete({ id, completed: event.target.checked }) }}
      />
      <label htmlFor="completed"
        className={completed ? "line-through" : ""}>
        {title}
      </label>
      <IconBackspace
        onClick={() => { handleDelete({ id }) }}
        className="hover:cursor-pointer ml-auto mr-[10px] w-[25px] h-[25px] 
      text-blue-800"/>
    </div>
  )
}