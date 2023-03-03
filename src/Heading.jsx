import React from 'react'
import { FaUser } from 'react-icons/fa';
import style from './Heading.module.css';

const Heading = (props) => {
    return (
        <>
            <h1 className={props.className + " " + style.textPrimary} onClick={props.onClick} id={props.id}>Heading</h1>
            <div className={style.box}>
                <FaUser size={64} />
            </div>
        </>
    )
}

export default Heading