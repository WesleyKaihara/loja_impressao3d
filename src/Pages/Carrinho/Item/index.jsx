import style from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Item(props) {

  const { id, nome, valor, quantidade } = props;

  const [qtProduto, setQtProduto] = useState(parseInt(quantidade));
  const [disabled, setDisabled] = useState(true);

  // 172.22.214.75
  const ip = "localhost";

  function calcTotal(event) {

    if (event === 'sub' && qtProduto > 1) {
      setQtProduto(qtProduto - 1);
      if (qtProduto - 1 === 1) {
        setDisabled(true);
      }
      return props.total(-valor);

    } else if (event === 'add') {
      setQtProduto(qtProduto + 1);
      setDisabled(false);
      return props.total(+valor);
    }
  }


  return (

    <div className={style.card}>
      <img src={`http://${ip}/BlubeeServer/getImage.php?id=${id}`} alt="img" />

      <div className={style.valoresContainer}>
        <h1>{nome}</h1>
        <p className={style.valorFinal}>
          Preço a vista no PIX R${(valor * qtProduto).toFixed(2)}
        </p>
        <p className={style.valorFinal}>
          Parcelado em até 5x de {((valor * qtProduto) / 5 + (valor * qtProduto) * 0.05).toFixed(2)}
        </p>
      </div>

      <div className={style.quantidadeContainer}>
        <button onClick={(e) => calcTotal(e.target.id)}
          className={style.seta} disabled={disabled}>
          <FontAwesomeIcon icon={faAngleLeft} id="sub" />
        </button>

        {qtProduto}

        <button onClick={(e) => calcTotal(e.target.id)}
          className={style.seta}>
          <FontAwesomeIcon icon={faAngleRight} id="add" />
        </button>

        <a href={`http://${ip}/BlubeeServer/removerCarrinho.php?id=${id}`}>
          <button className={style.remover}>Remover Produto</button>
        </a>
      </div>

    </div>

  )
}
