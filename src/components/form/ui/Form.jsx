import './form.scss';

import { useForm } from 'react-hook-form';

export const Form = ({ setIsSubmissionSuccessful }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      surname: '',
      middleName: '',
    },
  });

  const onSubmit = () => {
    setIsSubmissionSuccessful(true);
    reset();
  };

  return (
    <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-input_container">
        <input
          {...register('name', { required: true })}
          className={`form-input_container__input ${
            errors.name && 'input-error'
          }`}
          type="text"
          placeholder="Фамилия"
        />
        <input
          {...register('surname', { required: true })}
          className={`form-input_container__input ${
            errors.surname && 'input-error'
          }`}
          type="text"
          placeholder="Имя"
        />
        <input
          {...register('middleName', { required: true })}
          className={`form-input_container__input ${
            errors.middleName && 'input-error'
          }`}
          type="text"
          placeholder="Отчество"
        />
      </div>
      <div className="form-button">
        <button className="form-button__button" type="submit">
          <span>Отправить</span>
          <svg
            className="form-button__button_svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5 8.5L10.5 16.5L6 12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};
