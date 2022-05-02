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
              <i className="fa fa-list"></i> Clientes
              </Link>
              <Link to="/products">
              <i className="fa fa-product-hunt"> </i> Produtos
              </Link>             
              <Link to="/">
              <i className="fa fa-users "></i> Recursos Humanos
              </Link>
              <Link to="/products">
              <i className="fa fa-handshake-o"> </i> Fornecedores
              </Link>
              <Link to="/products">
              <i className="fa fa-file-text-o"> </i> Nota Fiscal
              </Link>
              <Link to="/products">
              <i className="fa fa-user-circle-o"> </i> Usuarios
              </Link>
              

            </nav>     
        </aside>