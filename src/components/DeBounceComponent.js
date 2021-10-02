import { useState } from "react";
import useDeBounce from "./useDeBounce";

export default function useDebounce() {
    const [count, setCount ] = useState(10)
    useDeBounce(() => alert(count), 1000, [count])

    return(
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </div>
    )
}