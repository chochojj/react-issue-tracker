import { useEffect, useState } from "react";
import { getIssues } from "../apis/api";
import IssueItem from "../components/IssueItem";
import { Container, Content } from "../styles/style";

const IssueList = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    getIssues().then((data) => {
      setIssues(data);
      console.log(data);
    });
  }, []);

  return (
    <Container>
      <Content>
        <ul>
          {issues.map((issue, index) => (
            <IssueItem key={issue.number} issue={issue} />
          ))}
        </ul>
      </Content>
    </Container>
  );
};

export default IssueList;
