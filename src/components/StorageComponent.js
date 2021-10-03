import { useSessionStorage, useLocalStorage } from "./useStorage";

export default function StorageComponent() {
    const [name, setName, removeName] = useSessionStorage("name", "Kyle")
    const [age, setAge, removeAge] = useLocalStorage("age", 26)

    return(
        <div>
            <div>{name} - {age}</div>
            <button onClick={() => setName("john")}>set name</button>
            <button onClick={() => setAge(40)}>set age</button>
            <button onClick={removeName}>rm name</button>
            <button onClick={removeAge}>rm age</button>
        </div>
    )
}