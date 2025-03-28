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

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 50vw;
  & > div {
    &:first-child,
    &:last-child {
      grid-column: span 2;
    }
  }
`;

const Box = styled(motion.div)`
  /* width: 400px; */
  height: 400px;
  background: var(--light-color);
  border-radius: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
//컨텐츠
function App() {
  // const [clicked, setClicked] = useState(false);
  // const toggle = () => {
  //   setClicked((prev) => !prev);
  // };
  const [id, setId] = useState<null | string>(null);
  const arr = ["1", "2", "3", "4"];
  return (
    <Wrapper>
      <Grid>
        {arr.map((n) => (
          <Box onClick={() => setId(n)} key={n} layoutId={n} />
        ))}
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Box layoutId="hello" style={{ width: 400, height: 200 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
