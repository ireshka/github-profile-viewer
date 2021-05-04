module.exports = {
  '*.{ts,tsx}': ['prettier --config .prettierrc --write', 'eslint --fix', 'git add'],
  '*.{css,html}': ['prettier --config .prettierrc --write', 'git add'],
};