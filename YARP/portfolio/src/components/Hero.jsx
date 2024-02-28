/* eslint-disable react/no-unescaped-entities */

import profilePic from '../assets/profilePic.jpg'
import Link from './Link'

const Hero = () => {
  return (
    
    <section className="hero divider">

        <div className="image">
            <img src={profilePic} alt=" photo of Gary M." />
        </div>

        <div className="">

            <h1>Hi, I'm Gary</h1>
            <p>Full-Stack Developer</p>
            <p>RTP, North Carolina</p>
            <Link href="#projects" className="btn">Here's Some of work</Link>

        </div> 


    </section>
  )
}

export default Hero