import style from './style.module.scss';

import PAC from '../../images/pac.png'
import SEDEX from '../../images/sedex.png'
import PIX from '../../images/pix.png';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <section className={style.Container}>
        <div className={style.categorias}>
          <h1>Categorias</h1>
          <ul>
            <a href="/produtos"><li>Para animais</li></a>
            <a href="/produtos"><li>Decorativos</li></a>
            <a href="/produtos"><li>Chaveiros</li></a>
            <a href="/produtos"><li>Miniaturas</li></a>
            <a href="/produtos"><li>Acessórios</li></a>
            <a href="/produtos"><li>Tudo</li></a>
          </ul>
        </div>
        <div className={style.contato}>
          <h1>Atendimento</h1>
          <ul>
            <li>Horário de atendimento:
              08:00 às 20:00 -
              Segunda a Sábado,
              horário de Brasília
              (Exceto domingo e feriados, em Campo Mourão - PR)</li>
          </ul>
        </div>
        <div className={style.entregas}>
          <h1>Formas de envio</h1>
          <p>
            <img src={PAC} alt="pac" className={style.img} />
          </p>
          <p>
            <img src={SEDEX} alt="sedex" />
          </p>
        </div>
        <div className={style.pagamentos}>
          <h1>Formas de Pagamento</h1>
          <img src={PIX} alt="pix" />
        </div>

      </section>
    </footer>
  )
}
