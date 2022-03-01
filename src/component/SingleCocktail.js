import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../Context";

export const SingleCocktail = () => {
    const { cocktail, getCocktail } = useGlobalContext();
    const { id } = useParams()


    const single = cocktail.filter(cot => {
        if (cot.id == id) {
            return cot;
        }
    })


    return <div className="single-cocktail-page">

        {single.map(sin => {
            const { id, name, image, info, instruction, modified, glass } = sin;

            return <div className="single-cocktail" key={id}>
                <div className="image-container">
                    <img src={image} alt="" className="image" />
                </div>

                <div className="usage">

                    <li>ID-Number : <span>{id}</span></li>
                    <li>Name : <span>{name}</span></li>
                    <li>Modified-date : <span>{modified}</span></li>
                    <li>Glass : <span>{glass}</span></li>
                    <li>Info : <span>{info}</span></li>
                    <li>Instruction : <span>{instruction}</span></li>

                </div>
            </div>
        })}
    </div >
}