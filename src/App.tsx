import { nanoid } from "nanoid"
import Button from "./components/Button"
import Input from "./Input"
import { useState } from "react"

function App() {
  const [value, setValue] = useState('')
  const buttons = [
    ['AC', '+/=', "%", '÷'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ]


  const handleClick = (key: string) => {
    setValue(key)
  }

  console.log('value', value)
  const buttonList = buttons.map(key => <Button key={nanoid()} value={key} handleClick={handleClick} />)
  return (

    <div className="w-80">
      <Input value={value} />
      {buttonList}
    </div>
  )
}

export default App