function Input({ value }: { value: string }) {
    return (
        <div className="bg-gray-400 w-full h-12 p-4 text-white text-right">
            {value}
        </div>)
}

export default Input