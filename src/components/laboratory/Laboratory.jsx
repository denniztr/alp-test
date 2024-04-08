import './laboratory.scss';

export const Laboratory = () => {
  return (
    <section className="background">
      <section className="center">
        <div className="laboratory-wrapper">
          <div className="laboratory-wrapper__content-container">
            <h2 className="laboratory-wrapper__content-container_title">
              Лаборотория
            </h2>
              <p className="laboratory-wrapper__content-container_description">
                Наша лаборатория предлагает широкий спектр медицинских
                исследований, проводимых опытными капибарами-лаборантами. Мы
                специализируемся на анализе биоматериалов, микробиологических
                исследованиях, генетической диагностике и многом другом.{' '}
              </p>
              <p className="laboratory-wrapper__content-container_description text-2">
                Мы используем современное оборудование и методики и гарантируем
                точность и надежность результатов.
              </p>
            <button className='laboratory-wrapper__content-container_button'>Оставить заявку</button>
          </div>
          <div>
            <img
              src="../../../public/pic2.png"
              alt="Image"
              className="img-lab"
            />
          </div>
        </div>
      </section>
    </section>
  );
};
