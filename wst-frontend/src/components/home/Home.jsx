import React from 'react'
import Main from '../templates/Main'
import './Home.css'
import { Link } from 'react-router-dom'


export default props =>
    <Main icon="home" title="Inicio"
        subtitle="WST - Sistema de Integrado">
        <div className="display-4">Bem Vindo!</div>
        <hr />
        <p className="mb-1">Menu</p>

        <p className='menuPrime'>
                {/*Refatorar cdigo*/}
                <Link to="/">
                    <i ></i> Cadastro de Cliente
                </Link>
                <Link to="/products">
                    <i> </i> Cadastro de Usuario
                </Link>
                <Link to="/">
                    <i ></i> Controle de Estoque
                </Link>
                <Link to="/products">
                    <i> </i> Recursos Humanos
                </Link>
                
                <Link to="/products">
                    <i> </i> Cadastro de Fornecedores
                </Link>

                <Link to="/products">
                    <i> </i> Envio de Nota Fiscal
                </Link>
        </p>

    </Main>