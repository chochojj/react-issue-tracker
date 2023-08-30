import { getIssues } from "../apis/api";
import IssueItem from "../components/IssueItem";
import Loading from "../components/common/Loading";
import { useFetch } from "../hook/useFetch";
import { Container, Content } from "../styles/style";

const IssueList = () => {
  const { data: issues, isLoading } = useFetch(getIssues);

  if (isLoading) {
    return <Loading />;
  }

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
