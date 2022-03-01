import { useGlobalContext } from "../Context";
import { Link } from "react-router-dom";
import { SingleCocktail } from "./SingleCocktail";
import { useState } from "react/cjs/react.development";
import { NotInclude } from "./Notinclude";

export const CocktailList = () => {
    const { loading, cocktail, setCocktail } = useGlobalContext();
    const [filtCocktail, setFiltCocktail] = useState(cocktail);

    //grabing by catogories
    const CatArr = [];
    for (let i = 0; i < cocktail.length; i++) {
        const Catigories = cocktail[i].info;

        CatArr.push(Catigories)
    }


    const NewCatArr = ['all', ...new Set(CatArr)]

    //choice Categories
    const filter = (e) => {

        const filterCocktail = cocktail.filter(arr => arr.info === e);
        if (e === 'all') {
            setFiltCocktail(cocktail)
            return
        }
        setFiltCocktail(filterCocktail)

    }

    //fix the first reloading bug
    const NewFitCocktail = filtCocktail <= 0 ? cocktail : filtCocktail;

    return cocktail <= 0 ? <NotInclude /> : <div className="cocktail-wrapper">

        {/* creating the catogory buttons */}
        <div className="btn-group">

            {NewCatArr.map((Catbtn, ind) => {
                return <button className="btn cat-btn" key={ind}
                    onClick={() => filter(Catbtn)}>{Catbtn}</button>
            })}
        </div>

        {/* showing the cocktail-list one by one */}
        <div className="cocktail-list">

            {NewFitCocktail.map((cockta, ind) => {

                const { id, glass, image, info, name } = cockta;

                return <div className="cocktail-card" key={ind}>
                    <div className="card-image">
                        <img src={image} alt="cocktail-image" className="cocktail-image" />
                    </div>
                    <div className="card-body">

                        <h3 className="card-title">
                            {name}
                        </h3>

                        <p className="card-title-three">{glass}</p>
                        <h5 className="card-title-two">{info}</h5>


                        <Link to={`/singlecocktail/${id}`} className="btn detail-btn">Details</Link>
                    </div>
                </div>
            })}
        </div>
    </div>

}