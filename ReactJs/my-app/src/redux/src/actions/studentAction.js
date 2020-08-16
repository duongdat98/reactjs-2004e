import { INCREASE_MARK } from '../constants/ActionsType'


export const increaseMark = () => (dispatch) => {
    dispatch({ type: INCREASE_MARK })
}
