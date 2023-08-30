import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIssueDetail } from "../apis/api";
import Profile from "../components/Profile";
import IssueHeader from "../components/IssueHeader";
import IssueBody from "../components/IssueBody";
import Loading from "../components/common/Loading";
import styled from "styled-components";
import { Container, Content } from "../styles/style";

const IssueDetail = () => {
  const { id } = useParams();

  const [issue, setIssue] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getIssueDetail(id)
      .then((data) => {
        setIssue(data);
        console.log(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

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
  display: flex;
  justify-content: center;
  align-items: center;
`;
