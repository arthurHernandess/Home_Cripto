import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './styles.css'

export default function HeaderCarteira(t) {
    const [tela, alimentarTela] = useState(t.tela);
    
    if(tela == 'home'){
        const [transparent, aTransparent] = useState(true);

        const personalizarHeader = (bg) =>{
            const header = document.querySelector('.header');
            if(header instanceof HTMLElement){
                header.style.backgroundColor = bg;
            }
        }

        useEffect((()=>{
            personalizarHeader('transparent');
        }), []);

        const scrollHandle = () =>{
            if(window.scrollY == 0){
                personalizarHeader('transparent');
                aTransparent(true);
            }
            if(window.scrollY != 0){
                if(transparent){
                    personalizarHeader('black');
                    aTransparent(false);
                }
            }
        }

        addEventListener('scroll', scrollHandle);
    }

    function clickLink(e, id) {
        e.preventDefault();
        if (id == 'performance' || id == 'colecoes') {
            location.href = `/#${id}`;
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
        <div className='header'> 
            <div className='header-home'>
                <Link onClick={(e)=>clickLink(e, 'dm1')} to="/"><span>Home</span></Link>
            </div>
            <div className='header-espaco-vazio-1'>

            </div>
            <div className='header-colecoes'>
                <Link onClick={(e)=>clickLink(e, 'colecoes')} to="/carteira#colecoes"><span>Coleções</span></Link>
            </div>
            <div className='header-performance'>
                <Link onClick={(e)=>clickLink(e, 'performance')} to="/carteira#performance"><span>Performance</span></Link>
            </div>
            <div className='header-espaco-vazio-2'>

            </div>
        </div>
    )
}