import createNote from './createNote';
import noteToRecord from './utils/noteToRecord';

let mockDataResponse = {
  id: 1001,
  title: 'foo',
  body: 'something else'
};

describe('createNote', () => {
  it('Calls fetch and returns a new note', () => {
    fetch.mockResponse(JSON.stringify(mockDataResponse));

    let note = {
      title: 'foo',
      body: 'something else'
    };

    return createNote(note, {
      AIRTABLE_DATABASE_ID: 'SOME_DATABASE_ID',
      AIRTABLE_TOKEN: 'SOME_TOKEN'
    }).then(note => {
      expect(note).toEqual(mockDataResponse);
    });
  });
  afterAll(() => {
    fetch.mockResponse();
  });
});
