import React from 'react';

function NamesList() {
  // this will need to be fetched from backend!
  // https://www.codingdeft.com/posts/react-fetch-data-api/

  const names = ["test1", "test2", "test3"]

  return (
    <div className='names-list'>
      {names.map((name, idx) => (
        <div className='name' key={idx}>
          {name}
        </div>
      ))}
    </div>
  );
}

export default NamesList;