export default function noteToRecord(note) {
  const record = { fields: {} };
  if (note.id) record.id = note.id;
  if (note.title) record.fields.title = note.title;
  if (note.body) record.fields.body = note.body;
  return record;
}
