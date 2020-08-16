import React, { useState, useEffect, useContext } from 'react';
import AppContext from './Context';


function FunctionComponent() {

    const { state, dispatch } = useContext(AppContext);
    const [name, setName] = useState('')
    const [surName, setSurName] = useState('')

    const onNameChange = (event) => {
        setName(event.target.value)
        console.log(state);
    }
    const onSurChange = (event) => {
        setSurName(event.target.value)
    }

    useEffect(() => {
        console.log("Component did mount? and Component did update?");
        document.title = name
    }, [name]);

        return (
            <div>
                Counter: { state.counter } <button onClick={() => dispatch({type: 'INCREASE'})} >Increase</button>
                <hr/>
                <button onClick={ () => dispatch({type : 'CHANGE'}) }> { state.theme === 'dark' ? 'Light' : 'Dark' } </button>
                <br/>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={name} onChange={onNameChange} style={ state.theme === 'dark' ? { backgroundColor: 'white'} : {backgroundColor: 'red'}} />
                <br/>
                <label htmlFor="name">SurName</label>
                <input type="text" id="surName" name="name" value={surName} onChange={onSurChange} style={ state.theme === 'dark' ? { backgroundColor: 'white'} : {backgroundColor: 'lightgreen'}} />
            </div>
            
        );
}

export default FunctionComponent;