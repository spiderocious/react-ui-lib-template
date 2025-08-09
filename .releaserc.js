const plugins = [
  '@semantic-release/commit-analyzer',
  '@semantic-release/release-notes-generator',
  '@semantic-release/changelog',
  '@semantic-release/github',
];

if (process.env.NPM_TOKEN) {
  plugins.splice(3, 0, '@semantic-release/npm');
}

module.exports = {
  branches: ['main'],
  plugins: plugins,
};