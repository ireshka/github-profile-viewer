export const validateUsername = (username: string): boolean => {
  // - only alphanumeric & hyphens
  // - not double hyphens
  // - not hyphens at the the beginning and at the end
  const githubUsernameRegexp = /^[\da-z](?:[\da-z]|-(?=[\da-z])){0,38}$/i;
  return githubUsernameRegexp.test(username);
};
