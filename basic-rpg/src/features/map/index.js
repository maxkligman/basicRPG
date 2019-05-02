import React from 'react'
import { connect } from 'react-redux'
import { SPRITE_SIZE} from '../../config/constants'
import Background from './CampusMap.png'

import './styles.css'

function getTileSprite (type){
    switch(type) {
        case 1:
            return 'grass'
        case 2:
            return 'fern'
        case 5:
            return 'rock'
        case 6:
            return 'tree'
        case 7:
            return 'treeCedar'
        case 8:
            return 'treeRed'
        case 9:
            return 'treeLemon'
        case 10:
            return 'dorm'
        case 11:
            return 'library'
        case 12:
            return 'frat'
        case 13:
            return 'gym'
        case 14:
            return 'cafeteria'
        case 20:
            return 'spikePit'

    }
}
function MapTile(props) {
    return <div 
        className={`tile ${getTileSprite(props.tile)}`}
        style={{
            height: SPRITE_SIZE,
            width: SPRITE_SIZE
        }}
    >
    </div>
}

function MapRow(props) {
    return <div 
        className='row'
        style={{
            height: 40
        }}
    >
    {
        props.tiles.map( tile => <MapTile tile={tile} />)
    }
    </div>
}

function Map(props) {
    return(
        <div
            style={{
                position: 'relative',
                top: '0px',
                left: '0px',
                width: '1000px',
                height: '600px',
                border: '4px solid black',
                backgroundImage: `url(${ Background})`,
                // background: 'green'
                backgroundSize:"cover",
                backgroundPositionY:"-50px",
                backgroundColor:  ' rgb(248, 238, 192)'
            }}
        >
        {
            props.tiles.map(row => <MapRow tiles={row} />)
        }
        </div>
        // <video autoPlay loop muted id="myVideo" style={{
        //     position: 'relative',
        //     top: '0px',
        //     left: '0px',
        //     width: '1000px',
        //     height: '600px',
        //     border: '4px solid black',
        // }}>
        //   <source src="Thick_Smoke_H264_Videvo.mp4" type="video/mp4" />
        // </video>
    )
}

function mapStateToProps(state) {
    return {
        tiles: state.map.tiles
    }
}

export default connect(mapStateToProps)(Map)