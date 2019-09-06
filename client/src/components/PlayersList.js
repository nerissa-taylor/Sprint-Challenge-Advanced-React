import React from 'react';

function PlayersList(props) {
    return (
        <div className="players-list">

            <h1>Name:{props.name}</h1>
            <p>Country:{props.country}</p>
            <p>Searches:{props.searches}</p>
            <p>id:{props.id}</p>

        </div>
    )
}
export default PlayersList;
