import style from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Item from './Item'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Frete from './Frete';


export default function Produtos(props) {

  // 192.168.15.46
  // const ip = "172.22.214.75";

  // let valorTotal = 0;
  const [carrinho, setCarrinho] = useState([]);
  const [frete, setFrete] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let valorIncialProdutos = 0;
    axios.get("http://localhost/BlubeeServer/joinCarrinho.php")
      .then(res => setCarrinho(res.data));
    carrinho.forEach(e => valorIncialProdutos += parseFloat(e.VALOR));
    setSubTotal(valorIncialProdutos);
  }, [carrinho]);

  return (
    <section className={style.Carrinho}>
      <h1 className={style.title}><FontAwesomeIcon icon={faCartShopping} /> Carrinho</h1>
      <Frete frete={(e) => setFrete(e)} />
      <div className={style.Container}>
        <div className={style.produtos}>
          <header>
            <h1>Produtos</h1>
            <a href="http://localhost/BlubeeServer/pagamento.php"><button className={style.remover}>Remover todos os produtos</button></a>
          </header>
          {(carrinho.length === 0) ?
            <p>Carrinho Vazio</p> :
            carrinho.map((item) => {
              return (
                <Item
                  key={item.ID}
                  id={item.ID}
                  nome={item.NOME}
                  quantidade={item.QUANTIDADE}
                  valor={item.VALOR}
                  total={(e) => {
                    setTotal(total + e)
                  }}
                />
              )
            })
          }

        </div>
        <div className={style.pagar}>
          <h1 className={style.pagarTitle}>Resumo</h1>
          <p>Valor Produtos: <span id='valorTotal'>R$ {(subTotal + parseFloat(total)).toFixed(2)}</span> </p>
          <hr />
          <p>Frete: R$ {frete.toFixed(2)}</p>
          <p id="valorPrazo">Total a prazo: R$ {((frete + subTotal + parseFloat(total)) * 1.03).toFixed(2)}</p>
          <div className={style.Pix}>
            <h1>Valor no PIX</h1>
            <h2 id="valorPIX">R$ {((frete + subTotal + parseFloat(total)) * 0.95).toFixed(2)}</h2>
            <p id='economia'>Economize: R$ {(((frete + subTotal + parseFloat(total)) * 1.03) - ((frete + subTotal + parseFloat(total)) * 0.95)).toFixed(2)}</p>
          </div>
          <a href="http://localhost/BlubeeServer/pagamento.php"><button>Finalizar compra</button></a>
        </div>
      </div>
    </section>
  );
}

