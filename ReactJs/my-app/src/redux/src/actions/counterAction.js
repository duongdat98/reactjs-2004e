import apis from '../apis/index'
import { INCREASE, INCREASE_ASYNC } from '../constants/ActionsType'



export const increase = () => (dispatch) => {
    console.log('Action is trigger');
    dispatch({ type: INCREASE })
}

export const increaseAsync = () => (dispatch) => {
    apis.fetchCounter().then((response) => {
        console.log(response.data.step);
        dispatch({ type: INCREASE_ASYNC, step: response.data.step })
    })
    
}

