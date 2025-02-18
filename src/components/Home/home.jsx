import react, {useEffect, useState} from 'react';
import './home.css';
import titulo from '../../assets/images/Titulo.png';
import Header from '../HeaderCarteira/index.tsx';
import Footer from '../Footer/index.jsx';
import jogo1 from '../../assets/images/jogos/jogo1.png';
import jogo2 from '../../assets/images/jogos/jogo2.png';
import jogo3 from '../../assets/images/jogos/jogo3.png';
import jogo4 from '../../assets/images/jogos/jogo4.png';
import jogo5 from '../../assets/images/jogos/jogo5.png';
import jogo6 from '../../assets/images/jogos/jogo6.png';
import jogo7 from '../../assets/images/jogos/jogo7.png';
import jogo8 from '../../assets/images/jogos/jogo8.png';
import jogo9 from '../../assets/images/jogos/jogo9.png';
import jogo10 from '../../assets/images/jogos/jogo10.png';
import jogo11 from '../../assets/images/jogos/jogo11.png';
import jogo12 from '../../assets/images/jogos/jogo12.png';
import piramide1 from '../../assets/images/elemGraficos/piramide1.png';
import piramide2 from '../../assets/images/elemGraficos/piramide2.png';
import diamante1 from '../../assets/images/elemGraficos/diamante1.png';
import diamante2 from '../../assets/images/elemGraficos/diamante2.svg';
import luz from '../../assets/images/Luz.png';
import controleCelular from '../../assets/images/controle-celular.png';


const images = [
    jogo1, jogo2, jogo3, jogo4, jogo5, jogo6, jogo7, jogo8, jogo9, jogo10, jogo11, jogo12,
];

export default function Home () {
    useEffect((()=>{
        const quadros = document.querySelectorAll('.imgJogos');

        const carregarQuadrosJogos = () =>{ // randomizar os jogos que aparecem nos quadrados
            const jafoi = [];
            let i = 0;
            while (true) {
                let img = Math.floor(Math.random() * 12);
                if (!jafoi.includes(img)) {
                  quadros[i].style.backgroundImage = `url(${images[img]})`;
                  jafoi.push(img);
                  i++;
                }
                if (jafoi.length === 12) break;
            }
        }

        carregarQuadrosJogos();
    }),[]);

    return(
        <div className='tela-home'>
            <Header tela='home'></Header>
            <section>
                <img id='luz' src={luz}></img>
                <div className='divMain' id='dm1' draggable='false'>
                    <div className='divEsquerda'>
                        <div className='divTitulo' draggable='false'>
                            <img draggable='false' id='imgTitulo' src={titulo}/>
                            <p>PREPARE-SE PARA SUBIR DE NÍVEL</p>
                        </div>
                        <div className='jogosLosango'>
                            <div draggable='false' className='quadroJogos um losango'><span className='imgJogos L1'></span></div>
                            <div draggable='false' className='quadroJogos dois losango'><span className='imgJogos L2'></span></div>
                            <div draggable='false' className='quadroJogos tres losango'><span className='imgJogos L3'></span></div>
                        </div>
                    </div>
                    <div className='vetorControle'></div>
                </div>

                <div className='divMain' id='dm2' draggable='false'>
                    <div className='introducao'>
                        <h1 className='tituloParag'>QUEM SOMOS NÓS?</h1>
                        <p>Somos uma tesouraria especializada em NFT Gaming, com uma visão clara e estratégica de que os ativos de jogos representam a melhor forma de exposição ao setor de Gaming dentro do universo cripto.</p>
                        <p>Nosso objetivo é identificar e investir em projetos que estejam em um estágio de maturação interessante e apresentem jogos que atraiam uma grande base de jogadores.</p>
                    </div>
                    <div className='jogosQuadrado' draggable='false'>
                        <div className='quadroJogos quatro' draggable='false'><span className='imgJogos'></span></div>
                        <div className='quadroJogos cinco' draggable='false'><span className='imgJogos'></span></div>
                        <div className='quadroJogos seis' draggable='false'><span className='imgJogos'></span></div>
                        <div className='quadroJogos sete' draggable='false'><span className='imgJogos'></span></div>
                        <div className='quadroJogos oito' draggable='false'><span className='imgJogos'></span></div>
                    </div>
                    <div id='elementosGraficosGrid' draggable='false'> 
                        <img draggable='false' id='p1' src={piramide1}></img>
                        <img draggable='false' id='d1' src={diamante1}></img>
                        <img draggable='false' id='d2' src={diamante2}></img>
                        <img draggable='false' id='p2' src={piramide2}></img>
                    </div>
                </div>

                <div className='divMain' id='dm3' draggable='false'>
                    <div className='divEsquerda'>
                        <div className='introducao i2'>
                            <h1 className='tituloParag'>DIVERSIFICAÇÃO</h1>
                            <p>Uma das principais vantagens da gestão ativa da tesrouraria é saber o momento certo de vender uma coleção, evitando perder o ponto ideal de saída, algo crucial no mercado de NFTs Gaming.</p>
                            <p>Na DAO, buscamos não nos expor apenas a uma única coleção, mas sim a um portfólio diversificado de NFTs bem selecionados. Além disso, conseguimos acessar coleções de maior valor, potencializando o risco/retorno.</p>
                            {/* <p>Iremos te guiar para os jogos mais divertidos e promissores, compartilhar os assets jogáveis para te ajudar a conquistar mais tokens e prover as ferramentas de análise e material educacional para "afiar suas armas"—de graça. Seu mérito é a chave para utilizar os melhores assets dos jogos.</p>
                            <p>Afinal, Web3 games devem ser acessíveis para todos.</p> */}
                            <img className='img-controle' src={controleCelular}></img>
                        </div>
                        <img id='d1' draggable='false' src={diamante1}></img>
                    </div>
                    <div draggable='false' className='vetorNave'></div>
                </div>

                <div className='divMain' id='dm4' draggable='false'>
                    <div className='textoSec4'>
                        <img draggable='false' id='p2' className='piramideSection4' src={piramide2}></img>
                        <div className='introducao i3'>
                            <h1 className='tituloParag'>    NOSSO TIME    </h1>
                            <p>Com uma equipe qualificada e com mais de 4 anos de experiência no mercado de cripto, possuímos um histórico assertivo nas principais coleções do mercado.</p>
                            <p>Estamos sempre acompanhando o projetos mais relevantes e discutindo internamente a melhor maneira de se expor em cada um deles.</p>
                        </div>
                        <img draggable='false' id='p1' className='piramideSection4' src={piramide1}></img>
                    </div>
                    <div className='jogosLosango'>
                        <div className='bolinhaBrilhante'></div><div className='losBrilhante'></div>
                        <div draggable='false' className='quadroJogos nove losango'><span className='imgJogos L1'></span></div>
                        <div draggable='false' className='quadroJogos dez losango'><span className='imgJogos L2'></span></div>
                        <div draggable='false' className='quadroJogos onze losango'><span className='imgJogos L3'></span></div>
                        <div draggable='false' className='quadroJogos doze losango'><span className='imgJogos L4'></span></div>
                        <div className='losBrilhante'></div><div className='bolinhaBrilhante'></div>
                    </div>
                </div>
            <Footer/>
            </section>
        </div>
    );
}