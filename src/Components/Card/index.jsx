import style from './style.module.scss';

export default function Card(props) {

  const { src, nome, valor } = props;
  return (

    <a href="/ProdutoInfo">
      <div className={style.card}>
        <div className={style.ImgContainer}>
          <img src={src} alt={nome} />
        </div>
        <h1 className={style.title}>{nome}</h1>
        <p className={style.valor}>{parseFloat(valor).toFixed(2)}</p>
        <p>Ver produto</p>
      </div>
    </a>

  )
}
