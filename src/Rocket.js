import * as React from 'react'
import { useSpring, animated} from '@react-spring/web'

import styles from './styles.module.css'

function generateCirclePath(numPoints, radius) {
  const path = [];
  const thetaIncrement = (2 * Math.PI) / numPoints;

  for (let i = 0; i < numPoints; i++) {
    const theta = i * thetaIncrement;
    const x = radius * Math.cos(theta);
    const y = radius * Math.sin(theta);

    path.push({ x: x, y: y, rotateZ: -i*20});
  }

  return path;
}

const coordinates = generateCirclePath(100, window.innerHeight/4)

export default function Rocket() {


  // direction calculates pointer direction
  // memo is like a cache, it contains the values that you return inside "set"
  // this way we can inject the springs current coordinates on the initial event and
  // add movement to it for convenience
  const styler = useSpring({
    loop: true,
    from: coordinates[0],
    to: coordinates,
    config: {
      mass: 1,
      friction: 1,
      tension: 1,
      duration: 100,     
    },   
});


  return (
    <animated.div
      className={styles.rocket}
     
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        ...styler,   
     
       
      }}
    />
  )
}