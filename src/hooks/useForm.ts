import { type TodoId, type Todo as TodoType, type TodoTitle } from '../types'
import { useState } from 'react'
import { mockTodos } from '../mock/todos.ts'


export const useForm = () => {
  const [todos, setTodos] = useState(mockTodos)

  const handleDelete = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodo = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodo)
  }

  const handleAdd = ({ title }: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    const newTodos = [newTodo, ...todos]
    setTodos(newTodos)
  }

  return { todos, handleDelete, handleCompleted, handleAdd }
}