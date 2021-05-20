import { useSpring, animated } from 'react-spring'

function Move() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 200 })
  return <animated.div style={props}>I will fade in</animated.div>
}

export default Move;