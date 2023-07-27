export default () => ({
  RunnerConfig: {
    GitHubPat: process.env.GITHUB_PAT,
    OpenAiApiKey: process.env.OPENAI_API_KEY,
  },
  ApiKeys: [
    {
      Title: 'API Key',
      ApiKey: process.env.API_KEY,
    },
  ],
  InstalledConnectors: [
    {
      RepoOwner: 'connery-io',
      RepoName: 'connery-runner-administration',
      RepoBranch: 'v0.0.1',
      ConfigurationParameters: {
        RunenrUrl: 'http://localhost',
        RunnerApiKey: process.env.API_KEY,
      },
    },
  ],
});
