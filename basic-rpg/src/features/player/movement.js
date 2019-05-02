import store from '../../config/store'
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../../config/constants'

export default function handleMovement(player) {

    function getNewPosition(oldPosition, direction) {
        switch (direction) {
            case 'WEST':
                return [oldPosition[0]-SPRITE_SIZE, oldPosition[1]]
            case 'EAST':
                return [oldPosition[0]+SPRITE_SIZE, oldPosition[1]]
            case 'NORTH':
                return [oldPosition[0], oldPosition[1]-SPRITE_SIZE]
            case 'SOUTH':
                return [oldPosition[0], oldPosition[1]+SPRITE_SIZE]
            default:
                return console.log('oi mate')
        }

    }

    function observeBoundaries(oldPosition, newPosition)  {
        return (newPosition[0] >= 0 && newPosition[0] <= MAP_WIDTH - SPRITE_SIZE) &&
                (newPosition[1] >= 0 && newPosition[1] <= MAP_HEIGHT - SPRITE_SIZE)
    }

    function observeImpassable(oldPosition, newPosition){
        const tiles = store.getState().map.tiles
        const y = newPosition[1] / SPRITE_SIZE
        const x = newPosition[0] / SPRITE_SIZE
        const nextTile = tiles[y][x]
        return nextTile < 5
    }

    function observeLocation (oldPosition, newPosition){
        const tiles = store.getState().map.tiles
        const y = newPosition[1] / SPRITE_SIZE
        const x = newPosition[0] / SPRITE_SIZE
        const nextTile = tiles[y][x]
        // switch(nextTile) {
        //     case 10:
        //         return console.log('oi mate its the dorm')
        //     default:
        //         return console.log("boo")    
        // }
        return nextTile; 
    }

    function dispatchMove(newPosition) {
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: newPosition
            }
        })
    }

    function attemptMove(direction){
        const oldPosition = store.getState().player.position
        const newPosition = getNewPosition(oldPosition, direction)
        
        if(observeBoundaries(oldPosition, newPosition) && observeImpassable(oldPosition, newPosition)){
            dispatchMove(newPosition)
        }
        switch(observeLocation(oldPosition, newPosition)) {
            case 10:
                 console.log('oi mate its the dorm')
                 break;
            case 11:
                 console.log('SHHHHHH ITS THE FUCKING LIBRARY')
                 break;
            case 12:
                 console.log('SIG EP SIG EP')
                 break;
            case 13:
                 console.log('get swol bruh')
                 break;
            case 14:
                 console.log('num nums motherfucker')
                 break;
            default:
                return console.log("moving")    
        }
    }

    function handleKeyDown(e) {
        e.preventDefault()

        switch(e.keyCode) {
            case 37:
                return attemptMove('WEST')
            case 38:
                return attemptMove('NORTH')
            case 39:
                return attemptMove('EAST')
            case 40:
                return attemptMove('SOUTH')
            default:
            console.log(e.keyCode)
        }
    }

    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
    })

    return player
}