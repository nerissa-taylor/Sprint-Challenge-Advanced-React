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

            .then(data =>


                this.setState({ players: data }))

            .catch(err => console.log("nooo"));
    }
    // handleChanges = event =>
    //     this.setState({ PlayersList: event.target.value })
    render() {

        return (
            <div>
                <h1>Hello Players</h1>
                <div>
                    <PlayersList player={this.state.players} />
                    {this.state.players && this.state.players.map(player => {
                        return (
                            <div key={this.state.players.id}>
                                <PlayersList players={player} />

                            </div>

                        )
                    })
                    }

                </div>
            </div>
        );
    }

}

export default Players;