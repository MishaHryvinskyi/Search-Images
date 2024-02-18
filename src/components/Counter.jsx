import { useState, useEffect } from "react"; 

export const Counter = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        document.title = `Ти флєцнув ${value} раз`
    }, [value])
    return (
        <div>
            <h2>Yo licked {value} times</h2>
            <button onClick={() => setValue(value + 1)} type="button">increment + 1</button>
            <button onClick={() => setValue(value - 1)} type="button">decrement - 1</button>
        </div>
    )
}