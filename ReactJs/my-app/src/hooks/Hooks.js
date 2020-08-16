import React, { useState, useReducer } from 'react';
import ClassComponent from './ClassComponent';
import FuncComponent from './FunctionComponent'
import AppContext from './Context'

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE':
            return state.theme === 'dark'
                ? { ...state, theme: 'light' }
                : { ...state, theme: 'dark' };
        case 'INCREASE': 
            return { ...state, counter: state.counter + 1};
        default:
            return state;
    }
}

const initialState = {
    theme: 'dark',
    counter: 0
}

const Hooks = () => {
    const [check, setCheck] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialState)

    // const [data, setData] = useState({ theme: 'dark' });

    // const changeTheme = () => {
    //     dispatch({type: 'CHANGE'})
    //     setData({ theme: data.theme === 'dark' ? 'light' : 'dark' })
    // }

    return (
        <div>
            Component: { check ? "Class Component" : "Function Component"}
            <br />
            <button onClick={() => { setCheck(!check) }}>Change</button>
            <hr />
            {/* <button onClick={changeTheme} > {data.theme === 'dark' ? 'light' : 'dark'} </button> */}
            {check ? <ClassComponent /> :
                <AppContext.Provider value={{ state, dispatch }}>
                    <FuncComponent />
                </AppContext.Provider>
            }
        </div>
    );

}

export default Hooks;
