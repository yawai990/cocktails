import React, { useState } from "react";
import { useGlobalContext } from "../Context";
import { Link } from "react-router-dom";

const AddCocktail = () => {
    const { getCocktail } = useGlobalContext()
    const [image, setImg] = useState('');
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [modified, setModified] = useState('');
    const [glass, setGlass] = useState('');
    const [info, setInfo] = useState('');
    const [instruction, setInstruction] = useState('');

    const onhandleSubmit = (e) => {
        e.preventDefault()
        let strDrinkThumb = image;
        let idDrink = id;
        let strDrink = name;
        let dateModified = modified;
        let strGlass = glass;
        let strAlcoholic = info;
        let strInstructions = instruction;

        // const newCocktail = { image, id, name, modified, glass, info, instruction }
        const newCocktail = {
            idDrink, strDrink,
            strDrinkThumb, strAlcoholic,
            strGlass, strInstructions, dateModified
        }

        fetch('http://localhost:3500/drinks', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCocktail)
        })
            .then(() => {
                getCocktail()
                alert('new cocktail added');
            })

        // window.navigator.reload()
    }

    return <div className="addCocktail-page">

        <h3 className="newcocktail-title">Add New Cocktail</h3>

        <form onSubmit={onhandleSubmit}>

            <div className="form-control">
                <label htmlFor="image">Add Image Url</label>
                <input type="text"
                    name="image" id="image"
                    required autoFocus={true}
                    value={image}
                    onChange={e => setImg(e.target.value)} />
            </div>

            <div className="form-control">
                <label htmlFor="cocktail-id">Add Cocktail Id</label>
                <input type="number"
                    id="cocktail-id"
                    min={0} required
                    value={id}
                    onChange={e => setId(e.target.value)} />
            </div>

            <div className="form-control">
                <label htmlFor="cocktail-name">Add Cocktail Name</label>
                <input type="text"
                    id="cocktail-name"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)} />
            </div>

            <div className="form-control">
                <label htmlFor="cocktail-date">Add Cocktail Modified Date</label>
                <input type="text" id="cocktail-date"
                    required
                    value={modified}
                    onChange={e => setModified(e.target.value)} />
            </div>

            <div className="form-control">
                <label htmlFor="cocktail-glass">Add Cocktail Glass</label>
                <input type="text" id="cocktail-glass"
                    required
                    value={glass}
                    onChange={e => setGlass(e.target.value)} />
            </div>

            <div className="form-control">
                <label htmlFor="cocktail-info">Add Cocktail Info</label>
                <input type="text"
                    id="cocktail-info"
                    required
                    value={info} onChange={e => setInfo(e.target.value)} />
            </div>

            <div className="form-control">
                <label htmlFor="cocktail-instruction">Add Cocktail Instruction</label>
                <input type="text"
                    id="cocktail-instruction"
                    required
                    value={instruction} onChange={e => setInstruction(e.target.value)} />
            </div>

            <button className="btn add-new-cocktail-btn"
                onClick={(e) => getCocktail()}>
                Add Cocktail
            </button>
        </form>
    </div>
}
export default AddCocktail;