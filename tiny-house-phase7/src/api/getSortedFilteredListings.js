//sort=[{field: "rent", direction: "desc"}]

export default function getSortedFilteredListings(sort, filter) {
  //console.log('>>>>>>>>>>>>>', sort);
  //console.log('>>>>>>>>>>>>>', filter);
  //let filter = 'Berkeley, CA';
  const filterVar = filter
    ? '&filterByFormula=' + encodeURI(`({location} = '${filter}')`)
    : '';

  // this didn't work --> const sortBy = encodeURI('[{field: "rent", direction: "desc"}]');
  const sortVar = sort ? `sort[0][field]=${sort}` : '';

  return fetch(
    `https://api.airtable.com/v0/appHq8T1Eu4rcibs9/TinyHouse?${sortVar}${filterVar}`,
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer keyE9lXfaaEAGEG23',
        'Content-Type': 'application/json'
      }
    }
  )
    .then(response => response.json())
    .then(data => {
      //console.log('ma data', data);
      // debugger;
      return data.records.map(record => {
        return {
          id: record.id,
          location: record.fields.location,
          dimensions: record.fields.dimensions,
          rent: record.fields.rent,
          date: record.fields.date,
          amenities: record.fields.amenities
        };
      });
    });
}
