module.exports = {
  branches: ['master', 'next'],
  plugins: [
    '@semantic-release/changelog',
    [
      '@google/semantic-release-replace-plugin',
      {
        replacements: [
          {
            files: ['lib/constants.js'],
            from: '__VERSION__',
            // eslint-disable-next-line no-template-curly-in-string
            to: '${nextRelease.version}',
            results: [
              {
                file: 'lib/constants.js',
                hasChanged: true,
                numMatches: 1,
                numReplacements: 1,
              },
            ],
            countMatches: true,
          },
        ],
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['lib/constants.js'],
      },
    ],
  ],
};
