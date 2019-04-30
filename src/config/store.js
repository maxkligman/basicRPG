import { createStore, combineReducers } from  'redux'
import playerReducer from '../features/player/reducer.js'

const rootReducer = combineReducers({
    player: playerReducer,
})

const store = createStore(
    rootReducer
)

export default store