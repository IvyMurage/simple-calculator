import { nanoid } from "nanoid"
import Button from "./components/Button"
import Input from "./Input"
import { useState } from "react"

function App() {
  const [value, setValue] = useState('')

  const buttons = [
    ['AC', '+/=', "%", '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ]

  const handleChange = (key: string) => {
    const operators = ['+', '-', '*', '/', '%', '=', '.'];

    if (operators.includes(key) && value.length === 0) return;

    if (key === '=') {
      let operands = value;
      operands = operands.replace(/÷/g, '/').replace(/×/g, '*');

      try {
        const result = eval(operands);
        setValue(result.toString());
      } catch {
        setValue('Error');
      }
      return;
    }

    if (key === 'AC') {
      setValue('');
      return;
    }

    if (operators.includes(key)) {
      const lastCharacter = value.slice(-1);

      if (operators.includes(lastCharacter)) {
        setValue(value.slice(0, -1) + key);
      } else {
        setValue(value + key);
      }
      return;
    }

    if (key === '.') {
      const lastOperand = value.split(/[\+\-\*/]/).pop() || '';

      if (!lastOperand.includes('.')) {
        setValue(value + key);
      }
      return;
    }

    setValue(prevValue => prevValue + key);
  };




  const buttonList = buttons.map(key => <Button key={nanoid()} value={key} handleChange={handleChange} />)
  return (

    <div className="w-80">
      <Input value={value} />
      {buttonList}
    </div>
  )
}

export default App