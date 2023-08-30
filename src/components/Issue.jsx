import styled from "styled-components";
import { Link } from "react-router-dom";

const Issue = ({ issue }) => {
  return (
    <li>
      <IssueLink>
        <div>
          <Title>
            <span>#{issue.number}</span>
            <span>{issue.title}</span>
          </Title>
          <Info>
            <span>작성자: {issue.user.login}</span>
            <span>작성일: {issue.title}</span>
          </Info>
        </div>
        <span>코멘트: {issue.comments}</span>
      </IssueLink>
    </li>
  );
};

export default Issue;

const IssueLink = styled(Link)`
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
