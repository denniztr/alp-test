import './laboratory.scss';

export const Laboratory = () => {
  return (
    <section className="background" id="lab">
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
              <span>Оставить заявку</span>
              <svg
                className="laboratory-content__button_arrow"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 12.5H5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 17.5L19 12.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 7.5L19 12.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
