import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import FormProdutos from './Pages/FormProdutos';

import App from './Pages/Home';
import Produtos from './Pages/Produtos';
import Contato from './Pages/Contato';
import ProdutoInfo from './Pages/ProdutoInfo';
import Carrinho from './Pages/Carrinho';

export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} exact />
        <Route path="/produtos" element={<Produtos />} exact />
        <Route path="/formProdutos" element={<FormProdutos />} exact />
        <Route path="/contato" element={<Contato />} exact />
        <Route path="/ProdutoInfo/:id" element={<ProdutoInfo />} exact />
        <Route path="/carrinho" element={<Carrinho />} exact />
      </Routes>
    </Router>
  );
}