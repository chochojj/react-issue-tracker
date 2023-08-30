import { Container, Content } from "../../styles/style";
import styled from "styled-components";

const Notfound = () => {
  return (
    <Container>
      <Wrap>
        <span>❗ NotFound ❗</span>
        <span>페이지를 찾을 수 없습니다</span>
        <span>주소를 확인해주세요</span>
      </Wrap>
    </Container>
  );
};

export default Notfound;

const Wrap = styled(Content)`
  position: relative;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    margin-bottom: 10px;
  }
`;
