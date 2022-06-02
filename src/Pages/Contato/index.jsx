import style from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contato() {
  return (
    <section>
      <h1 className={style.title}>Entre em contato</h1>
      <div className={style.contatoContainer}>
        <div className={style.formContainer}>
          <form action="/" method="post">
            <label htmlFor="nome">Nome Completo</label>
            <input type="text" name="nome" placeholder='Nome Completo' autoComplete='off' />
            <label htmlFor="email" >Email</label>
            <input type="text" name="email" placeholder='E-mail ' autoComplete='off' />
            <label htmlFor="mensagem">Mensagem</label>
            <textarea name="mensagem" rows="5" placeholder='Digite sua mensagem' autoComplete='off'></textarea>
            <button type="submit" className={style.btn}>Enviar Mensagem</button>
          </form>
        </div>
        <div className={style.meiosContato}>
          <h2 className={style.subTitle}><FontAwesomeIcon icon={faInstagram} /> Instagram</h2>
          <a href="https://www.instagram.com/blubee_store/"><p>@Blubee_Store</p></a>
          <h2 className={style.subTitle}> <FontAwesomeIcon icon={faEnvelope} /> Email</h2>
          <a href="/"><p>Blubee_Store@gmail.com</p></a>
          <h2 className={style.subTitle}> <FontAwesomeIcon icon={faFacebook} /> Facebook</h2>
          <a href="https://facebook.com/"><p>Blubee_Store</p></a>
        </div>
      </div>
    </section>
  );
}

