import React from 'react';

class PlayersList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            players: []
        }
    }
    render() {
        const { players } = this.state

        return (
            <div className="players-list">

                <h1>Name:{this.props.name}</h1>
                <p>Country:{this.props.country}</p>
                <p>Searches:{this.props.searches}</p>
                <p>id:{this.props.id}</p>

            </div>
        )
    }
}
export default PlayersList;
