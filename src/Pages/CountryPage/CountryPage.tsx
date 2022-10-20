import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CountryPageType } from '../../Types/CountryPage';

import { IoArrowBackOutline } from 'react-icons/io5';
import style from './CountryPage.module.scss';
import { Neighbours } from '../../Components/Neighbours/Neighbours';
import { ObjectType, ObjectCurrency } from '../../Types/ObjectType';



export const CountryPage: React.FC<CountryPageType> = ({ countries, themeColor }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  let countryInfo = countries.filter((item: any) => item.name.common === id)[0];

  return (
    <div className={themeColor ? `${style.main} ${style.darkTheme}` : `${style.main}`}>
      <div className={style.content}>
        <button onClick={goBack}>
          <IoArrowBackOutline /> Back
        </button>
        {countryInfo && (
          <div className={style.country}>
            <img src={countryInfo.flags.png} alt="" className={style.country__flag} />
            <div>
              <div>{countryInfo.name.common}</div>
              <div>
                <span>Native Name: </span>
                {Object.entries(countryInfo.name.nativeName as Array<ObjectType>)[0][1].common}
              </div>
              <div>
                <span>Population: </span>
                {countryInfo.population}
              </div>
              <div>
                <span>Region: </span>
                {countryInfo.region}
              </div>
              <div>
                <span>Sub Region: </span>
                {countryInfo.subregion}
              </div>
              <div>
                <span>Capital: </span>
                {countryInfo.capital}
              </div>
              <div>
                <span>Top Level Domain: </span>
                {countryInfo.tld[0]}
              </div>
              <div>
                <span>Currencies: </span>
                {Object.values(countryInfo.currencies as Array<ObjectCurrency>)[0].name}
              </div>
              <div>
                <span>Languages: </span>
                {Object.values(countryInfo.languages).join(' ')}
              </div>

              {countryInfo.borders && (
                <>
                  <span>Border Countries: </span>
                  {countryInfo.borders.map((border: any, index: number) => {
                    return (
                      <div key={index}>
                        <Neighbours neighbours={border} />
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
