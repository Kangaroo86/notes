export default function recordToNote(record) {
  return {
    id: record.id,
    title: record.fields.title,
    body: record.fields.body
  };
}
