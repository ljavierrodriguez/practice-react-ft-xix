import { useState } from "react"

export default function App(props){

    const [show, setShow] = useState(true);
    return (
        <>
        {
            show && (
                <>
                
                <h1>1</h1>
                <p>2</p>
                <p>3</p>
                <h2>1</h2>
                <p>2</p>
                <p>3</p>
                
                
                
                </>
            )
        }
        {
            show ? (
                <>
                </>
            ):(
                
                <>
                </>
            )
        }
        <h1 className={"text-center text-primary " + (show ? "shadow": "")}>{props.message}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, vitae omnis repudiandae dignissimos nemo doloribus dolorum exercitationem dolores aspernatur debitis, ducimus quisquam officia facilis explicabo enim, sit eligendi a eius!</p>
        </>
    )
}