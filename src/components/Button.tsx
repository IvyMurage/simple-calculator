import { nanoid } from "nanoid"

function Button({ value, handleClick }: { value: string[], handleClick: (key: string) => void }) {
    const buttonList = value.map(key => <button onClick={() => handleClick(key)} className=" w-20 h-20 col-span-2 p-5 border-2" key={nanoid()}>{key}</button>)
    return (
        <div className="">
            {buttonList}
        </div>
    )
}

export default Button