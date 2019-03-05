import { createGlobalId } from '@apollosproject/server-core';

export default {
  Mutation: {
    updateProfileField: (root, { input: { field, value } }, { dataSources }) =>
      dataSources.Person.updateProfile([{ field, value }]),
    updateProfileFields: (root, { input }, { dataSources }) =>
      dataSources.Person.updateProfile(input),
    uploadProfileImage: async (root, { file, size }, { dataSources }) =>
      dataSources.Person.uploadProfileImage(file, size),
  },
  Person: {
    id: ({ id }, args, context, { parentType }) =>
      createGlobalId(id, parentType.name),
    photo: ({ photo: { url } }) => ({ uri: url }),
    firstName: ({ firstName }) =>
      typeof firstName === 'object' ? '' : firstName,
    lastName: ({ lastName }) => (typeof lastName === 'object' ? '' : lastName),
  },
  GENDER: {
    Unknown: 0,
    Male: 1,
    Female: 2,
  },
};
