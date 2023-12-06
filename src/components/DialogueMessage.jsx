import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';

const DialogueMessage = (props) => {
    const message = props.message;
    const index = useRef(0);
    const [currentText, setCurrentText] = useState('');

    useEffect(() => {
        index.current = 0;
        setCurrentText('');
    }, [message]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setCurrentText((value) => value + message.charAt(index.current));
            index.current += 1;
        }, 30);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [currentText, message]);
    return (
        <div className="message-container" onClick={props.next}>
            <div className="message">
                <p>{currentText}</p>
                <Icon icon="material-symbols:arrow-drop-down-rounded" className='next'/>
            </div>
        </div>
    );
};

export default DialogueMessage;