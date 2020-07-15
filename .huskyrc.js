const tasks = (arr) => arr.join(' && ');

module.exports = {
  hooks: {
    'pre-commit': tasks([
      'git diff --cached --name-only --diff-filter=d | grep ".js$" | xargs ./node_modules/.bin/eslint',
    ]),
  },
};
