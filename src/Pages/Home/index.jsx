import style from './style.module.scss';

import whatsappLogo from '../../images/zap.png';
import Card from '../../Components/Card';

import Combo from '../../images/Combo01.png';

export default function App() {

  // const ip = "192.168.15.46";
  const ip = "172.22.214.75";

  return (
    <section className={style.home}>
      <a href="/contato"> <img src={whatsappLogo} alt="whatsappLogo" className={style.ContatoLogo} /></a>
      <div className={style.banner}>
        <h1>Grande variedade de Produtos</h1>
        <p>Ideias podem ser enviadas para o email Blubee@gmail.com e será análisada a possibilidade criação de novos modelos</p>
      </div>
      <div className={style.Container}>
        <h1 className={style.title}>Novidades</h1>
        <div className={style.produtosLista}>
          <div className={style.produtosHome}>
            <Card
              id={5}
              src={`http://${ip}/BlubeeServer/getImage.php?id=${5}`}
              nome="Suco Laranja"
              valor="5.50"
            />
            <Card
              id={5}
              src={`http://${ip}/BlubeeServer/getImage.php?id=${5}`}
              nome="Suco Laranja"
              valor="5.50"
            />
            <Card
              id={5}
              src={`http://${ip}/BlubeeServer/getImage.php?id=${5}`}
              nome="Suco Laranja"
              valor="5.50"
            />
            <Card
              id={5}
              src={`http://${ip}/BlubeeServer/getImage.php?id=${5}`}
              nome="Suco Laranja"
              valor="5.50"
            />
          </div>
        </div>


        <h1 className={style.titleCombos}>Combos - 3 em 1</h1>
        <div className={style.Combos}>
          <img src={Combo} alt="Combo Pokemons" />
          <div>
            <h2>Combo Pokemons</h2>
            <ul>
              <li>1x Dragonite</li>
              <li>1x Pikachu</li>
              <li>1x Eevee</li>
            </ul>
            <h3 className={style.valor}>R$120,00</h3>
            <small>Em até 6x de R$25,00 sem juros</small><br />
            <a href="/ProdutoInfo/9"><button>Ver Mais</button></a>
          </div>
        </div>

        <h1 className={style.title2}>Destaques</h1>
        <div className={style.produtosLista}>
          <div className={style.produtosHome}>
            <Card
              id={5}
              src={`http://${ip}/BlubeeServer/getImage.php?id=${5}`}
              nome="Suco Laranja"
              valor="5.50"
            />
            <Card
              id={5}
              src={`http://${ip}/BlubeeServer/getImage.php?id=${5}`}
              nome="Suco Laranja"
              valor="5.50"
            />
            <Card
              id={5}
              src={`http://${ip}/BlubeeServer/getImage.php?id=${5}`}
              nome="Suco Laranja"
              valor="5.50"
            />
            <Card
              id={5}
              src={`http://${ip}/BlubeeServer/getImage.php?id=${5}`}
              nome="Suco Laranja"
              valor="5.50"
            />
          </div>
        </div>
        <h1 className={style.titleCombos}>Combos - 3 em 1</h1>
        <div className={style.Combos}>
          <img src={Combo} alt="Combo Pokemons" />
          <div>
            <h2>Combo Pokemons</h2>
            <ul>
              <li>1x Dragonite</li>
              <li>1x Pikachu</li>
              <li>1x Eevee</li>
            </ul>
            <h3 className={`${style.valor} ${style.Colorwhite}`}>R$120,00</h3>
            <small>Em até 6x de R$25,00 sem juros</small><br />
            <a href="/ProdutoInfo/9"><button className={`${style.bgWhite} ${style.colorPrincipal}`}>Ver Mais</button></a>
          </div>
        </div>
      </div>
    </section>
  );
}

