import { useEffect, useState, useRef } from 'react'
import { CSSProperties } from 'react';
import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faCheckToSlot, faBook } from '@fortawesome/free-solid-svg-icons';
import anime from "animejs/lib/anime.es.js"

function App() {
    const [size, setSize] = useState(document.body.clientWidth > 800 ? 100 : 50);
    const [columns, setColumns] = useState(Math.floor(document.body.clientWidth / size));
    const [rows, setRows] = useState(Math.floor(document.body.clientHeight / size));
    const [toggled, setToggled] = useState(false);
    const [tiles, setTiles] = useState(Array.from(Array(columns * rows).keys()));
    const [tilesStyle, setTilesStyle] = useState(
        Object.assign(
            { "--columns": columns } as CSSProperties,
            { "--rows": rows } as CSSProperties,
        )
    )

    //change size of tiles based on window size, if window is resized
    const handleResize = () => {
        setSize(document.body.clientWidth > 800 ? 100 : 50);
        setColumns(Math.floor(document.body.clientWidth / size));
        setRows(Math.floor(document.body.clientHeight / size));
        setTiles(Array.from(Array(columns * rows).keys()));
    }

    const toggle = () => {
        setToggled(prevtToggled => !prevtToggled);
        if (toggled){
            setTilesStyle(
                Object.assign(
                    { "--columns": columns } as CSSProperties,
                    { "--rows": rows } as CSSProperties,
                )
            )
        } else {
            setTilesStyle(
                Object.assign(
                    { "--columns": columns } as CSSProperties,
                    { "--rows": rows } as CSSProperties,
                    {'background-image': 'url("back.png")'},
                    {'background-size': 'cover'}
                )
            )
        }
    }

    const handleOnClick = (index:any) => {        
        anime({
            targets: ".tile",
            opacity: toggled ? 1 : 0,
            delay: anime.stagger(50, {
                grid: [columns, rows],
                from: index
            })
        });
        toggle();
    }
    
    useEffect(() => {
        window.addEventListener("resize", handleResize);        
    }, []);


    return (
        <div id='tile-grid' className={toggled ? 'toggled' : ''}>
            {/* make tiles with style opacity depending on toggled, and property based on columns and rows */}
            <div id="tiles" style={tilesStyle} >
                {tiles.map((tile, index) => (
                    <div 
                        className="tile" 
                        key={index} 
                        style={{
                            opacity: toggled ? 0 : 1,
                        }} 
                        onClick={() => handleOnClick(index)}
                    ></div>
                ))}
            </div>
    
            <h1 id="title" className="centered">
                Click me for
            <span className="fancy">Magic</span>.
            </h1>

            <div id="img-container" className="img-container">
    
    
            <a id="docs-link" className="meta-link" href="documentation/documentation.html" target="_blank">
                <FontAwesomeIcon icon={faBook}  color='green' />
                <span>Docs</span>
            </a>
            
            <label htmlFor="vote-modal"  id="vote-link" className="meta-link" >
                <FontAwesomeIcon icon={faCheckToSlot}  color='blue' />
                <span>Vote</span>
            </label>

            <input type="checkbox" id="vote-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                    <label htmlFor="vote-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
    
            <a className="meta-link" href="#" target="_blank" >
                <FontAwesomeIcon icon={faArrowRightFromBracket} color='#8b0404' />
                <span>Log-out</span>            
            </a>
        </div>
    )
}

export default App
