import './gallery.scss';


export const Gallery = () => {
  return (
    <section className="center">
      <h2 className="gallery-title">Галерея</h2>
      <div className="grid-container">
        <div className="grid-container__item">
          <img
            className="image"
            src="../../../public/img6.png"
            alt="Image"
          />
        </div>
        <div className="grid-container__item-1">
          <img
            className="image"
            src="../../../public/img5.png"
            alt="Image"
          />
        </div>
        <div className="grid-container__item-2">
          <img
            className="image"
            src="../../../public/img4.png"
            alt="Image"
          />
        </div>
        <div className="grid-container__item-3">
          <img
            className="image"
            src="../../../public/img3.png"
            alt="Image"
          />
        </div>
        <div className="grid-container__item-4">
          <img
            className="image"
            src="../../../public/img2.png"
            alt="Image"
          />
        </div>
        <div className="grid-container__item-5">
          <img
            className="image"
            src="../../../public/img1.png"
            alt="Image"
          />
        </div>
        <div className="grid-container__item-6">
          <img
            className="image"
            src="../../../public/img.png"
            alt="Image"
          />
        </div>
      </div>
    </section>
  );
};
