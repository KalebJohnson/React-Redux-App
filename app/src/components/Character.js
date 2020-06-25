  
import React from 'react';

let fontStyle = { color:'#fff', textShadow:'-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black', margin:'1rem' }
let cardStyle = {  width: '25%', margin: '10px', border:'5px solid black', borderRadius: '10px', background:'grey'}
let imgStyle = {  width: '100%', borderRadius: '10px'}

const Character = ({ character }) => (

    <div style={cardStyle}>

      <img style={imgStyle} src={character.image} alt='' />
      <h3 style={fontStyle}>{character.name}</h3>
      <h4 style={fontStyle}> {character.species} </h4>

    </div>

)
export default Character;