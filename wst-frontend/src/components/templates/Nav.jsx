import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props => 
        <aside className="menu-area">
           <nav className="menu">
              {/*Refatorar cdigo*/}
             <Link to="/">
              <i className="fa fa-home"></i> Inicio
              </Link>
              <Link to="/">
              <i className="fa fa-home"></i> Clientes
              </Link>
              <Link to="/products">
              <i className="fa fa-product-hunt"> </i> Produtos
              </Link>
              <Link to="/products">
              <i className="fa fa-product-hunt"> </i> Usuarios
              </Link>
              <Link to="/">
              <i className="fa fa-home"></i> Recursos Humanos
              </Link>
              <Link to="/products">
              <i className="fa fa-product-hunt"> </i> Fornecedores
              </Link>
              <Link to="/products">
              <i className="fa fa-product-hunt"> </i> Nota Fiscal
              </Link>
              

            </nav>     
        </aside>