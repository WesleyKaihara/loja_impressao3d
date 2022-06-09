import style from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import axios from 'axios';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

export default function Frete(props) {

  // 172.22.214.75
  // const ip = "localhost";
  const [fretes, setFretes] = useState();
  const [disabled, setDisabled] = useState(true);

  function getFretes() {
    let cep = document.getElementById("cep");
    axios.get(`http://localhost/BlubeeServer/calculaFrete.php?cep=${cep.value}`)
      .then(res => setFretes(res.data));
  }

  function getEmpresa(ID) {
    if (ID === '04014') {
      return "SEDEX";
    } else if (ID === '04510') {
      return "PAC";
    } else {
      return "-----"
    }
  }


  return (

    <div className={style.calcFrete}>
      <div className={style.cepContainer}>
        <FontAwesomeIcon icon={faTruck} className={style.icon} />
        <input type="number"
          placeholder='Insira o seu CEP'
          onChange={(e) => (e.target.value.length >= 8) ?
            setDisabled(false) : null
          }
          name="cep"
          id="cep"
        />
        <button disabled={disabled} onClick={getFretes} className={style.btn}>Calcular Frete</button>
        <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noreferrer" className={style.BuscaCep}>Não sei meu CEP</a>
      </div>

      {(typeof fretes !== 'undefined') ?
        <div className={style.fretesContainer}>

          <div className={style.freteHead}>
            <p>Serviço</p>
            <p>Valor</p>
            <p>Prazo entrega</p>
          </div>


          {(typeof fretes !== 'undefined') ?
            fretes.map((empresa) => {
              return (
                <div key={empresa.ID[0]} className={style.FreteItem}>
                  <p>{getEmpresa(empresa.ID[0])}</p>
                  <p>R${empresa.valor[0]}</p>
                  <p>{empresa.prazoEntrega[0]} dias</p>
                  <button onClick={() => props.frete(parseFloat(empresa.valor[0]))}>Selecionar</button>
                </div>
              )
            }
            )
            :
            null
          }
        </div>
        : null}

    </div>

  )
}
