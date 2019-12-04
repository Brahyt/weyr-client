import React from 'react'
import dragon from '../../assets/dragon.png'
import './Splash.css'

function Splash () {
  return (
    <div className="splash-page">
      <img className="dragon" src={dragon} alt="images of a dragon"/>
      <p className="opener">A <b>party builder</b> and <b>quest tracker</b> for the <em>D&D</em> Inspired <b>DragonFire</b> board game.  Sign up, Create a party and populate it with your heros.</p>
      <p>Demo user - Login: dragon Password: demodragon</p>
      <p>Requests for new feaures <a href="mailto: weyralliance@gmail.com">HERE</a></p>
    </div>
  )

}

export default Splash;
