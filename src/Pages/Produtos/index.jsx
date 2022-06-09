import style from './style.module.scss';

import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../../Components/Card';

export default function Produtos(props) {

  const { linkPesquisa = "" } = props;

  const [produtos, setProdutos] = useState();
  const [busca, setBusca] = useState(linkPesquisa);
  const [produtosFiltrados, setprodutosFiltrados] = useState(produtos);

  // const ip = "192.168.15.46";
  const ip = "172.22.214.75";


  useEffect(() => {

    axios.get(`http://${ip}/BlubeeServer/getProdutos.php`)
      .then(res => {
        setProdutos(res.data)
        setprodutosFiltrados(res.data)
      });
  }, [])

  function pesquisaCategoria(pesquisa) {

    let itens = [];

    produtos.forEach(item => {
      if (pesquisa === item.CATEGORIA) {
        itens.push(item);
        setBusca(`[ ${pesquisa} ]`);
      }
    });
    setprodutosFiltrados(itens);

  };


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
    <section className={style.ProdutosContent}>
      <div className={style.subMenu}>
        <div className={style.categorias}>
          <button id="Articulado" onClick={(e) => pesquisaCategoria(e.target.id)}>Para Animais</button>
          <button id="Decorativos" onClick={(e) => pesquisaCategoria(e.target.id)}>Decorativos</button>
          <button id="Chaveiros" onClick={(e) => pesquisaCategoria(e.target.id)}>Chaveiros</button>
          <button id="Miniaturas" onClick={(e) => pesquisaCategoria(e.target.id)}>Miniaturas</button>
          <button id="Acessórios" onClick={(e) => pesquisaCategoria(e.target.id)}>Acessórios</button>
          <button id="Combos" onClick={(e) => pesquisaCategoria(e.target.id)}>Combos</button>
        </div>
        <input type="text"
          className={style.pesquisa}
          name="pesquisa"
          id="pesquisa"
          placeholder='Buscar'
          value={busca}
          onChange={(e) => pesquisaProdutos(e.target.value)}
        />
      </div>
      <h1 className={style.title}>Produtos</h1>
      <div className={style.produtosContainer}>

        {(typeof produtosFiltrados === 'undefined') ? <p>Loading...</p> :

          produtosFiltrados.map((produto) => {
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
        <a href="formProdutos">
          <div className={style.novoProduto}>
            <h1>Cadastrar Novo</h1>
          </div>
        </a>


      </div >
    </section >
  );
}

