import { useState } from 'react'
import './App.css'
import anime from 'animejs/lib/anime.es';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faCheckToSlot } from '@fortawesome/free-solid-svg-icons';

function App() {
    const wrapper = document.getElementById("tiles");

    let columns = 0,
        rows = 0,
        toggled = false;

    const toggle = () => {
        toggled = !toggled;
        
        document.body.classList.toggle("toggled");
    }

    const handleOnClick = (index:any) => {
        toggle();
        
        anime({
            targets: ".tile",
            opacity: toggled ? 0 : 1,
            delay: anime.stagger(50, {
                grid: [columns, rows],
                from: index
            })
        });
    }

    const createTile = (index:any) => {
        const tile = document.createElement("div");
        
        tile.classList.add("tile");
        
        tile.style.opacity = toggled ? '0' : '1';
        
        tile.onclick = e => handleOnClick(index);
        
        return tile;
    }

    const createTiles = (quantity:any) => {
        Array.from(Array(quantity)).map((tile, index) => {
            if (wrapper) {
                wrapper.appendChild(createTile(index));
            }
        });
    }

    const createGrid = () => {
        if (wrapper) {
            wrapper.innerHTML = "";
            
            const size = document.body.clientWidth > 800 ? 100 : 50;
            
            let columns : number = Math.floor(document.body.clientWidth / size);
            let rows : number = Math.floor(document.body.clientHeight / size);
            
            wrapper.style.setProperty("--columns", String(columns));
            wrapper.style.setProperty("--rows", String(rows));
            
            createTiles(columns * rows);
        }
    }

    createGrid();

    window.onresize = () => createGrid();

    return (
        <div className='root'>
            <div id="tiles"></div>
    
            <h1 id="title" className="centered">
                Click me for
            <span className="fancy">Magic</span>.
            </h1>
    
    
            <a id="vote-link" className="meta-link" href="#" target="_blank">
                <FontAwesomeIcon icon={faCheckToSlot}  color='blue' />
                <span>Vote</span>
            </a>
    
            <a className="meta-link" href="#" target="_blank" >
                <FontAwesomeIcon icon={faArrowRightFromBracket} color='#8b0404' />
                <span>Log-out</span>            
            </a>
        </div>
    )
}

export default App
