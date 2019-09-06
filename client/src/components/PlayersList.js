import React from 'react';
import Players from './Players';

function PlayersList(props) {

    return (
        <div>
            <h1>Name={props.name}</h1>
            {/* <div classname="players-list"> */}

            {/* 
                <h2>players={this.props.player.name}</h2>
                <p>country={props.players.country}</p>
                <p>   id={props.players.id}</p> */}
            {/* </div> */}
        </div>
    )
}


export default PlayersList;
