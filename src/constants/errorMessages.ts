export enum ErrorMessages {
  invalidUsername = 'Invalid Github Username: Github username may contain only alphanumeric characters or hyphens (no hyphens at the beginning / at the end)',
  userAlreadyExists = 'User with given username is already added',
  userNotFound = `User with given username wasn't found`,
  unknownError = `Unknown Error occured`,
  noUsername = `No username defined`,
  tooManyRequest = `Free Github Api needs rest. Wait some time before new actions`,
}
