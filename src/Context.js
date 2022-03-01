import React, { useState, useEffect, useContext } from "react";
import { NotInclude } from "./component/Notinclude";

const AppContext = React.createContext();

const MyAppContext = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [cocktail, setCocktail] = useState([]);
    const [error, setError] = useState(false);

    // console.log(cocktail);
    const getCocktail = async () => {
        try {

            //npx json-server --watch directories --port 3500 

            const resp = await fetch(`http://localhost:3500/drinks`)
            const data = await resp.json()


            if (data) {
                const newCocktails = data.map(item => {
                    const { idDrink, strDrink,
                        strDrinkThumb, strAlcoholic,
                        strGlass, strInstructions, dateModified } = item;

                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass,
                        instruction: strInstructions,
                        modified: dateModified,

                    }
                })
                const filterCocktail = newCocktails.filter((cockta) => {

                    if (cockta.name.includes(searchTerm)) {
                        const name = cockta.name.toLocaleLowerCase()

                        return name.includes(searchTerm.toLocaleLowerCase())
                    } else {
                        return null
                    }

                })

                if (filterCocktail) {
                    setCocktail(filterCocktail)

                    if (filterCocktail.length === 0) {
                        return setCocktail()
                    }
                } else {
                    setCocktail(newCocktails)
                    setError(false)
                }


            } else {
                setError(true)
                setCocktail([])
            }
            setLoading(false)
        }
        catch (err) {
            console.log(err);
            setLoading(true)
        }

    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
            getCocktail()
        }, 2000);

    }, [searchTerm, setSearchTerm]);


    return <AppContext.Provider
        value={{
            loading,
            searchTerm,
            setSearchTerm,
            cocktail,
            setCocktail,
            error,
            getCocktail,
            setLoading
        }}>
        {children}
    </AppContext.Provider>
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppContext, MyAppContext }