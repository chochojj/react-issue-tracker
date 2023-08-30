import styled from "styled-components";

const Header = () => {
  return (
    <Head>
      <span> facebook / react</span>
    </Head>
  );
};

export default Header;

const Head = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
