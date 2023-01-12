import React from 'react';
import { useState } from 'react';
import AsyncSelect from 'react-select/async';

const fetchData = (inputValue, callback) => {
  // setTimeout(() => {
  //   axios.get('/lookup', { params: { search: inputValue } })
  //     .then((result) => {
  //       const data = result.data;
  //       console.log(data);
  //       callback(data);
  //     })
  //     .catch((error) => {
  //       console.log(error, "error retrieving search results");
  //     });
  // }, 10);
};

function NameSelect(props) {
  const [selectedName, setSelectedName] = useState("");

  const handleChange = (option) => {
    setSelectedName(option.value);
  };

  return (
    <>
      <AsyncSelect
        isSearchable={true}
        getOptionLabel={(option) => option.label}
        getOptionValue={(option) => option.value}
        formatOptionLabel={(option) => <div>{option.label}</div>}
        loadOptions={fetchData}
        onChange={handleChange}
        placeholder="Search for a person..."
        isDisabled={props.disabled}
      />
      <button style={styles.submitButton}
        onClick={() => { props.addName(selectedName) }}
        disabled={(selectedName)}>
        Enter Name
      </button>
    </>
  )
};

export default NameSelect;

const styles = {
  submitButton: {
    marginTop: 20,
    borderRadius: 5,
  }
};