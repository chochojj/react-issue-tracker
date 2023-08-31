import { useParams } from "react-router-dom";
import { getIssueDetail } from "../apis/api";
import Profile from "../components/issuedetail/Profile";
import IssueHeader from "../components/issuedetail/IssueHeader";
import IssueBody from "../components/issuedetail/IssueBody";
import Loading from "../components/common/Loading";
import { useFetch } from "../hook/useFetch";
import styled from "styled-components";
import { Container, Content } from "../styles/style";

const IssueDetail = () => {
  const { id } = useParams();
  const { data: issue, isLoading } = useFetch(getIssueDetail, id);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <Content>
        <Title>
          <Profile profile={issue.user} />
          <IssueHeader issue={issue} />
        </Title>
        <IssueBody issueBody={issue.body} />
      </Content>
    </Container>
  );
};

export default IssueDetail;

const Title = styled.div`
  margin-top: 20px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
