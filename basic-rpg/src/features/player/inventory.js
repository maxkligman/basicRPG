import store from '../../config/store'


export default function handleInventory(player) {


function getInventory(player) {
 //get the thing from the place
 const currentInventory = store.getState().player.position
 
 return currentInventory
}


function dispatchInventory(newPosition) {
    store.dispatch({
        type: 'PICKUP_ITEM',
        payload: {
            inventory: newInventory
        }
    })
}

function handleKeyDown(e) {
    e.preventDefault()

    switch(e.keyCode) {
        case 13:
            return //function('PICKUP')
        case 73:
            return //function
        default:
        console.log(e.keyCode)
    }
}

window.addEventListener('keydown', (e) => {
    handleKeyDown(e)
})


    return player
}