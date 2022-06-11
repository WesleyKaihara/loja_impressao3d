import { useEffect, useState } from 'react';
import style from './style.module.scss';
import axios from 'axios';
import Card from '../../../Components/Card';

export default function Produtos(props) {

  const ip = "192.168.15.46";
  // const ip = "172.22.214.75";

  const [produtos, setProdutos] = useState();

  useEffect(() => {
    axios.get(`http://${ip}/BlubeeServer/getProdutos.php`)
      .then(res => {
        setProdutos(res.data)
      });
  }, [])

  return (
    <section className={style.ProdutosContainer}>
      {(typeof produtos === 'undefined') ? <p>Loading...</p> :

        produtos.map((produto) => {
          return (
            <Card
              id={produto.ID}
              key={produto.ID}
              src={`http://${ip}/BlubeeServer/getImage.php?id=${produto.ID}`}
              nome={produto.NOME}
              valor={produto.VALOR}
            />
          )
        })
      }
    </section>
  )
}
