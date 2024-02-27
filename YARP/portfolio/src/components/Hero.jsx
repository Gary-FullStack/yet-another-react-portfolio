/* eslint-disable react/no-unescaped-entities */


import profilePic from '../assests/profilePic.jpg'
function Hero() {
  return (
    
    <section className="hero divider">
        <div className="image">
        <img src={profilePic} alt=" photo of Gary M." />

        </div>

        <div className="">

            <h1>Hi, I'm Gary</h1>

        </div> 


    </section>
  )
}

export default Hero