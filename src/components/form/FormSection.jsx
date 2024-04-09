import { Form } from './ui/Form';

import './formSection.scss';

export const FormSection = () => {
  return (
    <div className='wrap'>
      <section className="">
        <div className="form-wrapper">
          <h3 className="form-wrapper__title">Заявка на диагностику</h3>
          <p className="font-wrapper__description">
            Доверьте свои медицинские исследования надежным капибарам-лаборантам
            и получите качественные результаты в кратчайшие сроки!
          </p>
          <Form />
        </div>
      </section>
    </div>
  );
};
