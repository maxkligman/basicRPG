const initialState = {
    position: [0, 0],
    inventory: [],
}

const playerReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'MOVE_PLAYER':
            return{
                ...action.payload
            }
        case 'PICKUP_ITEM':
            return{
                ...action.payload
            }
        default:
            return(state)
    }
}

export default playerReducer