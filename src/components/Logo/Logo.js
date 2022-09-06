import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => (
    <Tilt
      className="tilt-img"
      tiltMaxAngleX={35}
      tiltMaxAngleY={35}
      perspective={900}
      scale={1.1}
      transitionSpeed={2000}
      gyroscope={true}
    >
      <img style={{paddingTop: "5px"}} src={brain} className="inner-element" alt="pic" />
    </Tilt>
  );

export default Logo;