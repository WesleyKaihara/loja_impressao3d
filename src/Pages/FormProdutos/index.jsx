import style from './style.module.scss';

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function FormProdutos() {

  const [produtos, setProdutos] = useState();

  useEffect(() => {

    axios.get("http://localhost/BlubeeServer/getProdutos.php")
      .then(res =>
        setProdutos(res.data)
      );

  }, [])

  return (
    <section>
      <div className={style.formContainer}>
        <h1 className={style.title}>Cadastrar Produto</h1>
        <form encType="multipart/form-data" action="http://localhost/BlubeeServer/upload.php" method='POST' className={style.form}>
          <label htmlFor="nome_evento">Nome Produto</label>
          <div><input name="produto" id="produto" type="text" required autoComplete='off' /></div>
          <label htmlFor="descricao_eventos">Descrição do Produto</label>
          <div><input name="descricao" id="descricao" type="textarea" required autoComplete='off' /></div>
          <label htmlFor="valor">Valor do Produto</label>
          <div><input name="valor" id="valor" type="number" required autoComplete='off' /></div>
          <input type="hidden" name="MAX_FILE_SIZE" value="99999999" />
          <div><input name="imagem" type="file" required /></div>
          <input type="submit" value="Salvar" className={style.SubmitBtn} />
        </form>
      </div>

      {(typeof produtos === 'undefined') ? <p>Loading...</p> :

        produtos.map((produto) => {
          return (
            <div key={produto.ID}>
              <h1>{produto.NOME}</h1>
            </div>
          )
        })

      }
    </section>
  );
}

