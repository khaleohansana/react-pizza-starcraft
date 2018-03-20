import React, { Component } from 'react'
import PropTypesDefinitions from 'prop-types'
class Game extends Component {
    render() {
        return (
            <div>
                <header>
                    {this.props.gameName}
                </header>
                <div>
                    {this.props.rating}
                </div>
                <div>
                    {this.props.playable}
                </div>
                <ul>
                    <li>Protoss</li>
                    <li>Ill fuch you up with mass stalkers</li>
                    <li>If I need to I will dome your ass with stalkers with collosus I can throw in an Immortal:)</li>
                    <li>Than if I get Carriers its game over automatically:D</li>
                    <li> gang gang you already know thats a wrap</li>
                </ul>
            </div>

        )
    }
    
}

Game.propTypes = {
    gameName: PropTypesDefinitions.string.isRequired,
    rating: PropTypesDefinitions.string.isRequired,
    playable: PropTypesDefinitions.string.isReqired
}

export default Game