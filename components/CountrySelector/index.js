import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";


function CountrySelector() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  const customStyle = {

    container:(provided,state) => ({
      ...provided,
      width:"330px",
    }),
    input:(provided,state) => ({
      ...provided,
      height:"50px"
    })
  }

  return (
    <>
      <Select
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: '#ECF1F4',
            primary: 'black',
          },
        })}
        styles={customStyle}
        options={options}
        value={value}
        width='330px'
        onChange={changeHandler}
      />
    </>
  );
}

export default CountrySelector;
