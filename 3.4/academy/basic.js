const userAgentStrings = [
  `Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:100.0) Gecko/20100101 Firefox/100.0`,
  `Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36`,
  `Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1`
];

const getUserAgent = (data) => {
  const userAgents = [];

  if (data.length) {
    data.forEach((item) => {
      const parts = item.split(/[()]/);

      if (parts) {
        userAgents.push(
          {
            system: parts[1]
          }
        );
      }
    });
  }

  return userAgents;
};

console.log(getUserAgent(userAgentStrings));