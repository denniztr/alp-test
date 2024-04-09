import './form.scss';

import { useForm } from 'react-hook-form';

export const Form = ({ setIsSubmissionSuccessful }) => {

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      surname: '',
      middleName: '',
    },
  });

  const onSubmit = (values) => {
    if (
      values.name === '' ||
      values.surname === '' ||
      values.middleName === ''
    ) {
      console.log('Нет данных');
    }

    if (
      values.name !== '' ||
      values.surname !== '' ||
      values.middleName !== ''
    ) {
      console.log('Данные отправлены');
      setIsSubmissionSuccessful(true);
      reset();
    }
  };

  return (
    <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className='form-input_container'>
        <input
          {...register('name')}
          className="form-input_container__input"
          type="text"
          placeholder="Фамилия"
        />
        <input
          {...register('surname')}
          className="form-input_container__input"
          type="text"
          placeholder="Имя"
        />
        <input
          {...register('middleName')}
          className="form-input_container__input"
          type="text"
          placeholder="Отчество"
        />
      </div>
      <div className="form-button">
        <button className="form-button__button" type="submit">
          Отправить
        </button>
      </div>
    </form>
  );
};
