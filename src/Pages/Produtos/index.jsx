import style from './style.module.scss';

import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../../Components/Card';

export default function Produtos() {

  const [produtos, setProdutos] = useState();
  const [busca, setBusca] = useState("");
  const [produtosFiltrados, setprodutosFiltrados] = useState(produtos);

  useEffect(() => {

    axios.get("http://localhost/BlubeeServer/getProdutos.php")
      .then(res => {
        setProdutos(res.data)
        setprodutosFiltrados(res.data)
      });
  }, [])

  function pesquisaProdutos(pesquisa) {
    setBusca(pesquisa);

    const buscaLowerCase = pesquisa.toLowerCase();
    const item = (produtos.filter(produto =>
      produto.NOME.toLowerCase().includes(buscaLowerCase))
    )
    setprodutosFiltrados(item);
    if (pesquisa === '') {
      setprodutosFiltrados(produtos);
    }
  };

  return (
    <section>
      <div className={style.subMenu}>
        <input type="text"
          className={style.pesquisa}
          name="pesquisa"
          id="pesquisa"
          placeholder='Buscar'
          value={busca}
          onChange={(e) => pesquisaProdutos(e.target.value)}
        />
      </div>

      <div className={style.produtosContainer}>

        {(typeof produtosFiltrados === 'undefined') ? <p>Loading...</p> :

          produtosFiltrados.map((produto) => {
            return (
              <Card
                id={produto.ID}
                key={produto.ID}
                src={`http://localhost/BlubeeServer/getImage.php?id=${produto.ID}`}
                nome={produto.NOME}
                valor={produto.VALOR}
              />
            )
          })
        }
        <a href="formProdutos">
          <div className={style.novoProduto}>
            <h1>Cadastrar Novo</h1>
          </div>
        </a>


      </div>
    </section>
  );
}

