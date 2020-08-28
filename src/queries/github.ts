function wait<T>(ms: number, value: T) {
  return new Promise<T>((resolve) => setTimeout(resolve, ms, value));
}

export const getRepoInfo = () =>
  fetch("https://api.github.com/repos/tannerlinsley/react-query").then(res => wait(1000, res)).then((res) =>
    res.json()
  );
