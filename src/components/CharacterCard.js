import React, { Component } from 'react'

export class CharacterCard extends Component {
  

    render() {
        return (
            <div className="CharacterCard"
            style={{ backgroundImage: `url(${this.props.character.image})` }}>
      
            <div className="CharacterCard__name-container text-truncate">
            {this.props.character.name}
            </div>
            </div>
        )
    }
}

export default CharacterCard
