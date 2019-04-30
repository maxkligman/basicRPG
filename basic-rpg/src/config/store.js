import { createStore, combineReducers } from  'redux'
import playerReducer from '../features/player/reducer.js.js'

const rootReducer = combineReducers({
    player: playerReducer,
})

const store = createStore(
    rootReducer
)

export default store