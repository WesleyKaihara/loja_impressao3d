import style from './style.module.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

export default function ProdutoInfo(props) {
  const { id } = useParams();
  const [info, setInfo] = useState();
  const [fretes, setFretes] = useState();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost/BlubeeServer/getProduto.php?id=${id}`)
      .then(res => setInfo(res.data[0]))
  }, [id])


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
    <section>
      {(typeof info !== 'undefined') ?
        <div className={style.infoProduto}>
          <div className={style.imgContainer}>
            <img
              src={`http://localhost/BlubeeServer/getImage.php?id=${id}`}
              alt={info.NOME} />
          </div>
          <div className={style.infoContent}>
            <h1>{info.NOME}</h1>
            <h2>{parseFloat(info.VALOR).toFixed(2)}</h2>
            <p className={style.desconto}>Em até 2x de R${(parseFloat(info.VALOR) / 2 + parseFloat(info.VALOR) * 0.05).toFixed(2)} sem juros</p>
            <p className={style.desc}>{info.DESCRICAO}</p>
            <div className={style.cepContainer}>
              <FontAwesomeIcon icon={faTruck} />
              <input type="text"
                placeholder='Insira o seu CEP'
                onChange={(e) => (e.target.value.length >= 8) ?
                  setDisabled(false) : null
                }
                name="cep"
                id="cep"
              />
              <button disabled={disabled} onClick={getFretes}>Calcular Frete</button>
              <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noreferrer">Não sei meu CEP</a>
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
        </div>
        :
        <p>Carregando...</p>
      }
      <section className={style.Comentarios}>
        <div className={style.titleContainer}>
          <h1 className={style.title}>Comentários</h1>
          <div className={style.line}></div>
        </div>

      </section>
    </section>
  );
}

