import styled from "styled-components";
import { Link } from "react-router-dom";

const IssueHeader = ({ issue }) => {
  const formattedDate = issue.created_at.split("T")[0];

  return (
    <Header>
      <div>
        <Title>
          <span>#{issue.number}</span>
          <span>{issue.title}</span>
        </Title>
        <Info>
          <span>작성자: {issue.user.login}</span>
          <span>작성일: {formattedDate}</span>
        </Info>
      </div>
      <span>코멘트: {issue.comments}</span>
    </Header>
  );
};

export default IssueHeader;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;
  padding: 10px 15px;

  & > div {
    display: flex;
    flex-direction: column;
  }
  & > span {
    margin-left: 15px;
    font-size: 14px;
  }
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 4px;
  align-items: center;

  & > span {
    margin-right: 10px;
  }
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
