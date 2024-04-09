import './backgroundComponent.scss';

export const BackgroundComponent = () => {
  return (
    <section>
      <div className="background-image">
        <section className="center">
          <div className="background-text">
            <h4 className="background-text__top">ТОЧНЫЕ РЕЗУЛЬТАТЫ</h4>
            <h4 className="background-text__bottom">ТОЧНО В СРОК</h4>
          </div>
        </section>
        <div className="background-img-item" />
      </div>
      <section className='center'>
      <h3 className="title">
        Добро пожаловать в медицинскую лабораторию KapibaraLab, где работают
        исключительно капибары — ваш надежный партнер в обеспечении качественной
        и точной диагностики!
      </h3>
      </section>
    </section>
  );
};