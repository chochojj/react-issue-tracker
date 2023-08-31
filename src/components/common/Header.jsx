import styled from "styled-components";
import { owner, repo } from "../../apis/api";

const Header = () => {
  return (
    <Head>
      <span>
        {owner} / {repo}
      </span>
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
  background-color: #ffffff;
  border-bottom: 1px solid #dedede;
`;
