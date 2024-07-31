import { nanoid } from "nanoid"

function Button({ value, handleChange }: {
    value: string[],
    handleChange: (key: string) => void,

}) {
    const buttonList = value.map(key => <input value={key} type="button" onClick={() => handleChange(key)} className=" w-20 h-20 col-span-2 p-5 border-2" key={nanoid()} />)
    return (
        <div className="">
            {buttonList}
        </div>
    )
}

export default Button