import { useState } from 'react'
import Card from './components/Card'
import Menu from './components/menu'
import style from './Tecnologies.module.css'

import reactImg from './assets/react.svg'
import axiosImg from './assets/img/axios.png'
import nodeJsImg from './assets/img/nodeJs.png'
import reactRouterDomImg from './assets/img/reactRouterDom.png'
import npmImg from './assets/img/npm.png'
import viteImg from './assets/img/vite.png'

export const Tecnologies = () => {
    const [show, setShow] = useState('all');

    return(
        <>
            <Menu/>
            <section className={style['wrap-tec']}>
                <h1>Tecnologias</h1>
               <div className={style['wrap-btns-tec']}>
                <button className={style.btnTec} onClick={() => setShow('axios')}>AXIOS</button>
                <button className={style.btnTec} onClick={() => setShow('nodeJs')}>NODE JS</button>
                <button className={style.btnTec} onClick={() => setShow('reactRouterDom')}>REACT DOM</button>
                <button className={style.btnTec} onClick={() => setShow('react')}>REACT</button>
                <button className={style.btnTec} onClick={() => setShow('vite')}>VITE</button>
                <button className={style.btnTec} onClick={() => setShow('npm')}>NPM</button>
                <button className={style.btnTec} onClick={() => setShow('all')}>All tec´s</button>
               </div>
                <div className={style['wrap-cards-tec']}>
                   {show === 'axios' && <Card title='AXIOS' imgSrc={axiosImg} desc='Biblioteca HTTP.'/>}
                   {show === 'nodeJs' && <Card title='nodeJs' imgSrc={nodeJsImg} desc=' Ambiente JavaScript servidor.'/>}
                   {show === 'reactRouterDom' && <Card title='reactRouterDom' imgSrc={reactRouterDomImg} desc='Renderização React no navegador.'/>}
                   {show === 'react' && <Card title='REACT JS' imgSrc={reactImg} desc='Biblioteca UI interativa.'/>}
                   {show === 'vite' && <Card title='vite' imgSrc={viteImg} desc=' Framework web rápido.'/>}
                   {show === 'npm' && <Card title='npm' imgSrc={npmImg} desc=' Gerenciador pacotes Node.js.'/>}
                   {show === 'all' && 
                   <>
                   <Card title='AXIOS' imgSrc={axiosImg} desc='Sou o axios'/> 
                   <Card title='NODE JS' imgSrc={nodeJsImg} desc='Sou o nodeJs'/>
                   <Card title='REACT DOM' imgSrc={reactRouterDomImg} desc='Sou o reactRouterDom'/>
                   <Card title='VITE' imgSrc={viteImg} desc='Sou o vite'/>
                   <Card title='NPM' imgSrc={npmImg} desc='Sou o npm'/>
                   <Card title='REACT JS' imgSrc={reactImg} desc='Sou o REACT'/>
                   </>}
                </div>
            </section>
        </>
    )
}