import React from 'react';
import styles from './popup.module.css';
import { RiCloseLine } from "react-icons/ri";

function Popup(props) {
    return (props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles.popupInner}>
                <RiCloseLine color="#000000" size={36} onClick={() => props.setTrigger(false)}/>
                { props.children }
            </div>
        </div>
    ): "";
}

export default Popup;