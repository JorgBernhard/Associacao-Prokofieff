import './style-filosofia.css';

import Steiner from '../../assets/steiner.png';

function Filosofia() {
  return (
    <div id='filosofia'>
    <div className="Filosofia">
    <div className="Imagens">
     <img className="Steiner" src={Steiner} alt="steiner" />
     <h5 className="Rudolf">Rudolf Steiner</h5>
     </div>
    </div>
    </div>
  );
}

export default Filosofia;
