import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style.module.scss';

import { faBars, faHome, faShop, faMessage, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Header() {


  const ip = "192.168.15.46";
  // const ip = "172.22.214.75";

  const [menu, setMenu] = useState("");
  const [qtProdutos, setQtProdutos] = useState(0);

  useEffect(() => {
    axios.get(`http://${ip}/BlubeeServer/getQuantidadeCarrinho.php`)
      .then(res => setQtProdutos(res.data.length));
  })

  return (
    <header className={style.header}>
      <a href="/"><h1 className={style.title}>Blubee Store</h1></a>
      <FontAwesomeIcon
        icon={faBars}
        className={style.MenuIcon}
        onClick={() => (menu === "") ? setMenu(style.openMenu) : setMenu("")}
      />
      <nav className={`${style.menu} ${menu}`}>
        <ul>
          <a href="/">
            <li> <FontAwesomeIcon icon={faHome} /> Home</li>
          </a>
          <a href="/produtos">
            <li> <FontAwesomeIcon icon={faShop} /> Produtos</li>
          </a>
          <a href="/contato">
            <li> <FontAwesomeIcon icon={faMessage} /> Contato</li>
          </a>
          <a href="/carrinho">
            <li className={style.cart}> <FontAwesomeIcon icon={faCartShopping} className={style.cartIcon} /><p>{qtProdutos}</p></li>
          </a>
        </ul>
      </nav>
    </header>
  )
}
