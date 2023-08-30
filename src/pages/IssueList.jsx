import { Fragment } from "react";
import { getIssues } from "../apis/api";
import IssueItem from "../components/IssueItem";
import Loading from "../components/common/Loading";
import Advertise from "../components/Advertise";
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
          {issues.map((data, index) => (
            <Fragment key={data.number}>
              <IssueItem issue={data} />
              {(index + 1) % 4 === 0 && <Advertise />}
            </Fragment>
          ))}
        </ul>
      </Content>
    </Container>
  );
};

export default IssueList;
