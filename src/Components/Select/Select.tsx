import { useForm, SubmitHandler } from 'react-hook-form';
import { FormInputType } from '../../Types/FormInputType';
import { SelectType } from '../../Types/SelectType';

import style from './Select.module.scss';

export const Select: React.FC<SelectType> = ({ setSelect, themeColor }) => {
  const { register, handleSubmit } = useForm<FormInputType>();

  const onSubmit: SubmitHandler<FormInputType> = (data) => setSelect(data.regions);

  return (
    <div>
      <form onChange={handleSubmit(onSubmit)}>
        <select
          {...register('regions')}
          className={themeColor ? `${style.select} ${style.darkTheme}` : `${style.select} `}>
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>
    </div>
  );
};
