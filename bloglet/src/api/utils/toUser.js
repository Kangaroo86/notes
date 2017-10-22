import get from 'lodash.get';

export default function toUser(record) {
  return {
    id: get(record, 'id'),
    uuid: get(record, 'fields.uuid'),
    username: get(record, 'fields.username'),
    bio: get(record, 'fields.bio'),
    articleIds: get(record, 'fields.articles')
  };
}
