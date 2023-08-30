import { Octokit } from "octokit";

const owner = "facebook";
const repo = "react";

const octokit = new Octokit({
  auth: process.env.REACT_APP_TOKEN,
});

export const getIssues = async () => {
  try {
    const response = await octokit.request("GET /repos/{owner}/{repo}/issues", {
      owner: `${owner}`,
      repo: `${repo}`,
      state: "open",
      sort: "comments",
      direction: "desc",
      per_page: 10,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
