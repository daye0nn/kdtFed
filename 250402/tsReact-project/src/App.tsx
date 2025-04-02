import { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.styles";
import Button from "./components/Button";
import Label from "./components/Label";

//스타일 정의
const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: bold;
  margin-bottom: 32px;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [counter, setCounter] = useState(0);
  const add = () => {
    setCounter(counter + 1);
  };
  const sub = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <GlobalStyles />
      <Title>Counter App</Title>
      <Contents>
        <Button label="-" onClick={sub} />
        <Label data={counter} />
        <Button label="+" onClick={add} />
      </Contents>
    </>
  );
}

export default App;
