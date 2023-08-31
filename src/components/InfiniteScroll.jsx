import React, { useRef } from "react";
import styled from "styled-components";
import Loading from "./common/Loading";
import { Container } from "../styles/style";
import { useObserver } from "../hook/useObserver";
import { getIssues } from "../apis/api";

const InfinityIssues = ({ page, addIssues }) => {
  const targetRef = useRef(null);

  const loadMoreIssues = async () => {
    const nextPage = page.current + 1;

    try {
      const response = await getIssues(nextPage);
      page.current = nextPage;
      addIssues(response);
    } catch (error) {
      console.error(error);
    }
  };

  useObserver(targetRef, loadMoreIssues);

  return (
    <Observer ref={targetRef}>
      <Loading />
    </Observer>
  );
};

export default InfinityIssues;

const Observer = styled(Container)`
  width: 100%;
  margin-top: 30px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
