import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from '../Header/Header';
import { HomePage } from '../../Pages/HomePage/HomePage';
import { CountryPage } from '../../Pages/CountryPage/CountryPage';

import axios from 'axios';

export const Countries = () => {
  const [themeColor, setThemeColor] = useState(true);
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [filtered, setFiltered] = useState([]);
  const [select, setSelect] = useState('');

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}`)
      .then((res) => setCountries(res.data))
      .catch((err) => console.log(err));
  }, []);

  const getInputChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  const onThemeChange = () => {
    setThemeColor(!themeColor);
  };

  const getFilter = (searchValue: string, selectValue: string) => {
    let data = [...countries];
    if (selectValue) {
      data = data.filter((item: any) => item.region === selectValue);
    }

    if (searchValue) {
      data = data.filter((item: any) =>
        String(item.name.common).toLowerCase().includes(searchValue.toLocaleLowerCase()),
      );
    }

    setFiltered(data);
  };

  useEffect(() => {
    getFilter(searchValue, select);
  }, [searchValue, select]);

  useEffect(() => {
    setFiltered(countries);
  }, [countries]);

  return (
    <div>
      <Header themeColor={themeColor} onThemeChange={onThemeChange} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                themeColor={themeColor}
                countries={filtered}
                getInputChange={getInputChange}
                searchValue={searchValue}
                setSelect={setSelect}
              />
            }
          />
          <Route
            path="/:id"
            element={<CountryPage countries={filtered} themeColor={themeColor} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
