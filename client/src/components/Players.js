import React from 'react';
import PlayersList from './PlayersList';

class Players extends React.Component {
    constructor() {
        super();
        this.state = {
            players: [];



        }
    }
    componentDidMount() {
        fetch("http://localhost:5000/api/players")

            .then(response => response.json())
            .then(response => this.setState({ players: response.data }))
            .catch(err => console.log("nooo"));
    }
    handleChanges = event =>
        this.setState({ PlayersList: event.target.value })
    render() {
        console.log(render)
        return (
            <div className="players">
                <h1>Hello Players</h1>
                {this.state.players && this.state.players.map(player =>
                    (<PlayersList key={this.state.player.id} player={this.state.players} />
                    ))}
                <p>{this.state.players.name}</p>
                <p>{this.state.players.country}</p>
                <p>{this.state.players.searches}</p>
                <p>{this.state.players.id}</p>

            </div>

        )
    }
}
export default Players;