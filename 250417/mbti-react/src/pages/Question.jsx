import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 98vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 3rem;
  background: var(--accent);
  color: var(--light);
  padding: 8px 14px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  & > button[type="button"] {
    width: 400px;
    height: 200px;
    font-size: 1.8rem;
    border-radius: 8px;
  }
`;

const Question = () => {
  return (
    <Container>
      <ProgressBar striped variant="danger" now={30} />
      <Wrapper>
        <Title>나는 문제입니다.</Title>
        <ButtonGroup>
          <Button variant="danger">나는 답변 1번입니다.</Button>
          <Button variant="danger">나는 답변 2번입니다.</Button>
        </ButtonGroup>
      </Wrapper>
    </Container>
  );
};

export default Question;
