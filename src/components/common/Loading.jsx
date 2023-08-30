import styled, { keyframes } from "styled-components";
import { Container, Content } from "../../styles/style";

const Loading = () => {
  return (
    <Container>
      <Wrap>
        <Loader />
      </Wrap>
    </Container>
  );
};

export default Loading;

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Wrap = styled(Content)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Loader = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid teal;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;
