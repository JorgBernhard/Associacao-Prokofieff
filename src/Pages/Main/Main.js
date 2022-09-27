import './style-main.css';

import Prokofieff from '../../assets/prokofieff.png';
import Steiner from '../../assets/steiner.png';

function Main() {
  return (
    <div className="Main">
      <h2 className="Entro">Seja bem vindo</h2>
      <h2 className="Header">Associação Sergei Prokofieff de Antroposofia e Cristologia</h2>
      <div className="Container-main">
        <h4 className="Filosofia">Nos somos.....</h4>
        <div className="Imagens">
        <img className="Prokofieff" src={Prokofieff} alt="prokofieff" />
        <h5 className="Sergei">Sergei Prokofieff</h5>
        </div>
      </div>
    </div>
  );
}

export default Main;
