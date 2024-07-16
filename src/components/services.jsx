import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Passeios Turísticos</h2>
          <p>
            Descubra os melhores destinos da região com nossos emocionantes passeios turísticos. Oferecemos diversas opções para você explorar paisagens deslumbrantes, praias paradisíacas e atrações únicas. Escolha seu roteiro e prepare-se para uma experiência inesquecível.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3">
                  <div className="service-card">
                    <img src={d.img} alt={d.name} />
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                      <a href="#" className="btn-reserve">Reserve Agora</a>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
