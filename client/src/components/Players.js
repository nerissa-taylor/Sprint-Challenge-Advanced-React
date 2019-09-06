import React from 'react';
import PlayersList from './PlayersList';

class Players extends React.Component {
    constructor() {
        super();
        this.state = {
            players: [],



        }
    }
    componentDidMount() {
        fetch("http://localhost:5000/api/players")

            .then(response => response.json())
            .then(response => this.setState({ players: response.data }))
            .catch(err => console.log("nooo"));
    }

    render() {

        return (
            <div className="players">
                <h1>Hello Players</h1>
                {this.state.players && this.state.players.map(player =>
                    (<PlayersList key={this.state.id} player={this.state.players} />
                    ))}
                <p>{this.state.name}</p>
                <p>{this.state.country}</p>
                <p>{this.state.searches}</p>
                <p>{this.state.id}</p>

            </div>

        )
    }
}
export default Players;