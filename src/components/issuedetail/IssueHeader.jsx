import styled from "styled-components";
import { VscComment } from "react-icons/vsc";

const IssueHeader = ({ issue }) => {
  const formattedDate = issue.created_at.split("T")[0];

  return (
    <Header>
      <div>
        <Title>
          <span>
            #{issue.number} {issue.title}
          </span>
        </Title>
        <Info>
          <span>작성자: {issue.user.login}</span>
          <span>작성일: {formattedDate}</span>
        </Info>
      </div>
      <span>
        <VscComment /> <p>{issue.comments}</p>
      </span>
    </Header>
  );
};

export default IssueHeader;

const Header = styled.div`
  width: calc(100% - 70px);
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;
  padding: 7px 12px;

  & > div {
    display: flex;
    flex-direction: column;
  }
  & > span {
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  & > span > p {
    margin-left: 3px;
  }
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 4px;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
`;

const Info = styled.div`
  display: flex;
  margin-bottom: 4px;
  align-items: center;
  flex-wrap: nowrap;

  & > span {
    margin-right: 10px;
    font-size: 14px;
  }
`;
