import get from 'lodash.get';

export default function toArticle(record) {
  return {
    id: get(record, 'id'),
    uuid: get(record, 'fields.uuid'),
    title: get(record, 'fields.title'),
    description: get(record, 'fields.description'),
    body: get(record, 'fields.body'),
    authorId: get(record, 'fields.author[0]')
  };
}
