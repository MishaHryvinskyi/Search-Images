import { useState, useEffect, useReducer } from "react"; 

function countReducer(state, action) {
    switch(action.type) {
        case 'increment':
            return state + action.payload;
        case 'decrement':
            return state - action.payload;
        default:
            throw new Error(`Unsuported action type ${action.type}`);
    }
}

export const Counter = () => {
    const [count, dispatch] = useReducer(countReducer,0);

    useEffect(() => {
        document.title = `Ти флєцнув ${count} раз`
    }, [count])
    return (
        <div>
            <h2>Yo licked {count} times</h2>
            <button 
                onClick={() => dispatch({ type: 'increment', payload: 1 })} 
                type="button"
                >
                    increment + 1
            </button>
            <button 
                onClick={() => dispatch({ type: 'decrement', payload: 1 })} 
                type="button"
                >
                    decrement - 1
            </button>
        </div>
    )
}

// export const Counter = () => {
//     const [value, setValue] = useState(0);

//     useEffect(() => {
//         document.title = `Ти флєцнув ${value} раз`
//     }, [value])
//     return (
//         <div>
//             <h2>Yo licked {value} times</h2>
//             <button onClick={() => setValue(value + 1)} type="button">increment + 1</button>
//             <button onClick={() => setValue(value - 1)} type="button">decrement - 1</button>
//         </div>
//     )
// }