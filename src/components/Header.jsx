import styled from "styled-components";

const Header = () => {
  return <Head>헤더~</Head>;
};

export default Header;

const Head = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
