import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './styles.css'

export default function Footer() {

    function clickLink(e, id) {
        e.preventDefault();
        if (id == 'performance' || id == 'colecoes') {
            location.href = `/carteira#${id}`;
        }
        else {
            location.href = `/#${id}`;
        }
        const sec = document.getElementById(id);
        setTimeout(() => {
            if(sec) {
            sec.scrollIntoView({ behavior: 'smooth', block: 'center'});
            }
        }, 300);
    } 

    return (
        <div className='footer'> 
            <div className='footer-nome-empresa'>
                <span>NFT GAMING ASSET DAO</span>
            </div>
            <div className='footer-espaco-vazio-1'>

            </div>
            <div className='footer-home'>
                <Link onClick={(e)=>clickLink(e, 'dm1')} to="/"><span>Home</span></Link>
            </div>
            <div className='footer-colecoes'>
                <Link onClick={(e)=>clickLink(e, 'colecoes')} to="/carteira#colecoes"><span>Coleções</span></Link>
            </div>
            <div className='footer-performance'>
                <Link onClick={(e)=>clickLink(e, 'performance')} to="/carteira#performance"><span>Performance</span></Link>
            </div>
            <div className='footer-espaco-vazio-2'>

            </div>
        </div>
    )
}