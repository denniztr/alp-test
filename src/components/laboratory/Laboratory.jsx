import './laboratory.scss';

export const Laboratory = () => {
  return (
    <section className="background">
      <section className="center">
        <div className="laboratory-wrapper">
          <div className="laboratory-content">
            <h2 className="laboratory-content__title">Лаборатория</h2>
            <div className="laboratory-content_image-mob">
              <img
                className="laboratory-content_image__img"
                src="../../../public/pic2.png"
                alt="LaboratoryImage"
              />
            </div>
            <div className="laboratory-content__description">
              <p>
                Наша лаборатория предлагает широкий спектр медицинских
                исследований, проводимых опытными капибарами-лаборантами. Мы
                специализируемся на анализе биоматериалов, микробиологических
                исследованиях, генетической диагностике и многом другом.
              </p>
              <p>
                Мы используем современное оборудование и методики и гарантируем
                точность и надежность результатов.
              </p>
            </div>
            <button className="laboratory-content__button">
              Оставить заявку
            </button>
          </div>
          <div className="laboratory-wrapper_image-desk">
            <img
              className="laboratory-wrapper_image__img"
              src="../../../public/pic2.png"
              alt="LaboratoryImage"
            />
          </div>
        </div>
      </section>
    </section>
  );
};
