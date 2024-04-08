import './backgroundComponent.scss';

export const BackgroundComponent = () => {
  return (
    <section>
      <div className="bg">
        <img
          src="../../../public/topBackground.png"
          alt="background"
          className="img"
        />
        <section className="center-bg">
          <div className="center-bg__text">ТОЧНЫЕ РЕЗУЛЬТАТЫ</div>
          <div className="center-bg__text-2">ТОЧНО В СРОК</div>
        </section>
        <div>
          <img src="../../../public/pic.png" alt="img" className="pic" />
        </div>
      </div>
      <div className="center">
        <h3 className="title">
          {' '}
          Добро пожаловать в медицинскую лабораторию KapibaraLab, где работают
          исключительно капибары — ваш надежный партнер в обеспечении
          качественной и точной диагностики!
        </h3>
      </div>
    </section>
  );
};
