import { Octokit } from "octokit";

export const owner = "facebook";
export const repo = "react";

const octokit = new Octokit({
  auth: process.env.REACT_APP_TOKEN,
});

export const getIssues = async (page) => {
  try {
    const response = await octokit.request("GET /repos/{owner}/{repo}/issues", {
      owner: `${owner}`,
      repo: `${repo}`,
      state: "open",
      sort: "comments",
      direction: "desc",
      per_page: 10,
      page,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getIssueDetail = async (issueId) => {
  try {
    const response = await octokit.request(
      "GET /repos/{owner}/{repo}/issues/{issueId}",
      {
        owner: `${owner}`,
        repo: `${repo}`,
        issueId: `${issueId}`,
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
