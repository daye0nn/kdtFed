import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { click } from "@testing-library/user-event/dist/click";

//스타일
const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 250px;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background: var(--light-color);
  border-radius: 60px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  background: var(--circle-color);
  /* border-radius: 50px; */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

//컨텐츠
function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => {
    setClicked((prev) => !prev);
  };
  return (
    <Wrapper onClick={toggleClicked}>
      <Box>
        {!clicked ? (
          <Circle layoutId="circle" style={{ borderRadius: 50 }} />
        ) : null}
      </Box>
      <Box>
        {clicked ? <Circle layoutId="circle" style={{ scale: 2 }} /> : null}
      </Box>
    </Wrapper>
  );
}

export default App;
