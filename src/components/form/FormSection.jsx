import { useState } from 'react';
import { Form } from './ui/Form';

import './formSection.scss';

export const FormSection = () => {
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);
  
  return (
    <div className="wrap" id='form'>
      <section className="">
        <div className="form-wrapper">
          {isSubmissionSuccessful ? (
            <div className='submission-container'>
              <img src="/public/succesSubmission.svg" alt="Successful" />
              <p className='submission'>Спасибо за предоставленную информацию, мы свяжемся с вами в ближайшее время.</p>
            </div>
          ) : (
            <>
              <h3 className="form-wrapper__title">Заявка на диагностику</h3>
              <p className="form-wrapper__description">
                Доверьте свои медицинские исследования надежным
                капибарам-лаборантам и получите качественные результаты в
                кратчайшие сроки!
              </p>
              <Form setIsSubmissionSuccessful={setIsSubmissionSuccessful} />
            </>
          )}
        </div>
      </section>
    </div>
  );
};
