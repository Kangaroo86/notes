import getNotes from './getNotes';
import noteToRecord from './utils/noteToRecord';
import data from '../mock-data';

describe('getNotes', () => {
  it('Calls fetch and returns notes', () => {
    fetch.mockResponse(
      JSON.stringify({ records: data.notes.map(noteToRecord) })
    );

    return getNotes({
      AIRTABLE_DATABASE_ID: 'SOME_DATABASE_ID',
      AIRTABLE_TOKEN: 'SOME_TOKEN'
    }).then(notes => {
      expect(notes).toEqual([...data.notes]);
    });
  });

  afterAll(() => {
    fetch.mockReset();
  });
});
