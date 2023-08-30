import { useEffect, useState } from "react";
import { getIssues } from "../apis/api";
import Issue from "../components/Issue";

const IssueList = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    getIssues().then((data) => {
      setIssues(data);
      console.log(data);
    });
  }, []);

  return (
    <main>
      <ul>
        {issues.map((issue, index) => (
          <Issue key={issue.number} issue={issue} />
        ))}
      </ul>
    </main>
  );
};

export default IssueList;
