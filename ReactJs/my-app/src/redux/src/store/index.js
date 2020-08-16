import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension'



const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

store.subscribe(() => {
    console.log("state", store.getState());
})

export default store