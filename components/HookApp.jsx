import React, { useState, useEffect } from 'react';
import '../style.css';

export default function Greeting(props) {

    const name = useFormInput('Mary');
    const surname = useFormInput('Poppins');
    const width = useWindowWidth();
    useDocumentTitle(name.value + ' ' + surname.value);
    
    return (
        <div>
            <section className="someStyle">
                <input className="input" {...name} />
            </section>

            <section className="someStyle">
            <input className="input" {...surname} />
            </section>

            <section className="someStyle">
                {width}
            </section>
        </div>
    );
} 
    
function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }

    return {
        value,
        onChange: handleChange
    };
}

function useDocumentTitle(title) {
    useEffect(() => {
        document.title = title;
    });

}

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });
    return width;
}