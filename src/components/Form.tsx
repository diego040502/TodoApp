import React, { useState } from "react"
import { type TodoTitle } from "../types"

interface Props {
  handleAdd: ({ title }: TodoTitle) => void
}

export const Form: React.FC<Props> = ({ handleAdd }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    handleAdd({ title: inputValue })
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={inputValue}
        type="text"
        onChange={(event) => { setInputValue(event.target.value) }}
        placeholder='¿Qué quieres hacer hoy?'
        className='bg-transparent px-[10px] py-[5px] placeholder-blue-800 rounded-[10px] mr-[10px]
        border-solid border-[1px] border-blue-900'
        autoFocus />
      <button
        type="submit"
        className='px-[10px] py-[5px] border-solid border-[1px] bg-blue-800 text-white 
        border-white rounded-[10px] hover:bg-blue-700 w-[75px]'>
        Add
      </button>
    </form>
  )
}