import styled from "styled-components";
import { Link } from "react-router-dom";
import { VscComment } from "react-icons/vsc";

const IssueItem = ({ issue }) => {
  const formattedDate = issue.created_at.split("T")[0];

  return (
    <li>
      <IssueLink to={`/issues/${issue.number}`}>
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
      </IssueLink>
    </li>
  );
};

export default IssueItem;

const IssueLink = styled(Link)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dedede;
  padding: 10px 15px;

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
