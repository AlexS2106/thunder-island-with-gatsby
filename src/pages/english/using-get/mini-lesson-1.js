import React, { useState } from "react";
import { useSpring, useSprings, useTransition, animated } from 'react-spring';

const MiniLesson1 = () => {

  const [ isToggled, setToggle ] = useState( false );


  const [ transitionState, setTransitionState ] = useTransition( {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  } );
  
  const fade = useSpring( {
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000 }
  } );

  const buttonFade = useSpring( {
    backgroundColor: isToggled ? "red" : "blue",
    fontStyle: isToggled ? "italic" : "",
  } );

  return (
    <div>
      <animated.div style={ fade }>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </animated.div>
      <button onClick={ () => setToggle(!isToggled) }>Toggle</button>
      <animated.div style={ buttonFade }>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </animated.div>
      <animated.ul>

      </animated.ul>
        </div>
      )
}

export default MiniLesson1;