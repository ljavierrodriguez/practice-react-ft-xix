import { useEffect, useState } from "react"
import Heading from "./Heading";
import { FaEye } from 'react-icons/fa';
import Footer from "./Footer";

export default function App(props) {

    const [show, setShow] = useState(true);

    const [name, setName] = useState("Yurbanis"); // [value, function]

    const cambiarShow = () => {
        setShow(!show);
    }

    const style = {
        borderRadius: '10px',
        backgroundColor: 'red',
        padding: '10px 20px',
        color: 'white',
    }

    useEffect(() => {
        console.log("Loading component...")
    }, []);

    useEffect(() => {
        console.log("Cambio el nombre...");
    }, [name]);


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
                ) : (

                    <>
                    </>
                )
            }
            <Heading className="my-3 text-white bg-dark shadow" onClick={cambiarShow} id="heading" name="" placeholder="" />

            <div className="box">
                <FaEye size={64} />
            </div>
            <h1 className={"text-center text-primary " + (show ? "shadow" : "")} onClick={() => alert(1)}>{props.message}</h1>
            <p style={style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, vitae omnis repudiandae dignissimos nemo doloribus dolorum exercitationem dolores aspernatur debitis, ducimus quisquam officia facilis explicabo enim, sit eligendi a eius!</p>
            <Footer />
            <p>{name}</p>
            <button onClick={() => setName("Hugo")}>Hugo</button>
            <button onClick={() => setName("Paco")}>Paco</button>
            <button onClick={() => setName("Luis")}>Luis</button>
        </>
    )
}