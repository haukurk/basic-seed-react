import React from "react";
import { useQuery } from "react-query";
import { getRepoInfo } from "../../queries/github";

export function SomethingElse() {
  const { isLoading, error, data, refetch } = useQuery(
    "get-some-repo-data",
    getRepoInfo,
    {
      staleTime: 4000,
    }
  );

  if (isLoading) return <div>"Loading..."</div>;

  if (error) return <div>"An error has occurred: " + error</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
      <button onClick={() => refetch()}>again</button>
    </div>
  );
}
