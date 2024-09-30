/* eslint-disable react/prop-types */
import '../../CSS/Hero.css'

const Hero = (props) => {
    return (
        <>
            <div className="hero-section">
                <div className="left">
                    <h1>STYLES NEVER</h1>
                    <h2>GROW OLD</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Libero mollitia officia iure similique, dolorem asperiores
                        fugit facilis labore quos ea aliquam necessitatibus accusamus ariatur!</p>
                    <button className='btn'>Shop Now</button>
                </div>
                <div className="right">
                    <div className="image-area">
                        <div className="down">
                            <div className="back">
                                <img src={props.banner} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bubble"></div>
                <div className='bubbs'></div>
            </div>
        </>
    )
}

export default Hero