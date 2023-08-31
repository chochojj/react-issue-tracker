import { useState, useEffect, useRef } from "react";
import { Fragment } from "react";
import IssueItem from "../components/IssueItem";
import Loading from "../components/common/Loading";
import Advertise from "../components/Advertise";
import InfiniteScroll from "../components/InfiniteScroll";
import { Container, Content } from "../styles/style";
import { getIssues } from "../apis/api";

const IssueList = () => {
  const [issues, setIssues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const page = useRef(1);

  const addIssues = (newIssues) => {
    setIssues((prevIssues) => [...prevIssues, ...newIssues]);
  };

  useEffect(() => {
    getIssues(page.current)
      .then((response) => {
        setIssues(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

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
        <InfiniteScroll page={page} addIssues={addIssues} />
      </Content>
    </Container>
  );
};

export default IssueList;
