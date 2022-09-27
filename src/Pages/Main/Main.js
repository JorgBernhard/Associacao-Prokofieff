import './style-main.css';

import Prokofieff from '../../assets/prokofieff.png';


function Main() {
  return (
    <div id='main'>
    <div className="Main">
      <h2 className="Entro-main">Seja bem vindo</h2>
      <h2 className="Header-main">Associação Sergei Prokofieff de Antroposofia e Cristologia</h2>
      <div className="Container-main">
        <h4 className="Filosofia-main">Nos somos.....</h4>
        <div className="Imagens-main">
        <img className="Prokofieff" src={Prokofieff} alt="prokofieff" />
        <h5 className="Sergei">Sergei Prokofieff</h5>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Main;
