import styled from "styled-components";

const Issue = ({ issue }) => {
  return (
    <li>
      <Title>
        <span># {issue.number}</span>
      </Title>
    </li>
  );
};

export default Issue;

const Title = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
