import React from 'react'

function Map(props) {
    return(
        // <div
        //     style={{
        //         position: 'relative',
        //         top: '0px',
        //         left: '0px',
        //         width: '1000px',
        //         height: '600px',
        //         backgroundColor: 'green',
        //         border: '4px solid black',
        //     }}
        // />
        <video autoPlay loop muted id="myVideo" style={{
            position: 'relative',
            top: '0px',
            left: '0px',
            width: '1000px',
            height: '600px',
            border: '4px solid black',
        }}>
          <source src="Thick_Smoke_H264_Videvo.mp4" type="video/mp4" />
        </video>
    )
}

export default Map