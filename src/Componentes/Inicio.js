import Logo from "./Logo";
import React from "react";

function Inicio({visibilidade, mudarVisibilidade, meta, setMeta, deck, setDeck}) {
    function handleInputChange(event){
        setMeta(parseInt(event.target.value));
        
    }

    function handleSelectChange(event){
        setDeck(event.target.value);
    }


    return (
        <div className="inicio">
            <Logo className="" />
            <select value={deck} onChange={handleSelectChange}>
                <option value="JSX">JSX</option>
                <option value="JSX2">JSX2</option>
            </select>

            <input className="meta" type="text" value={meta >= 0 ? meta : ''} placeholder="Meta de zaps" onChange={handleInputChange} />
            <button onClick={() => mudarVisibilidade(meta)}>Iniciar Recall!</button>
        </div>)
}

export default Inicio;