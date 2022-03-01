import { SearchForm } from "./SearchForm";
import { CocktailList } from "./CocktailList";
import { useGlobalContext } from '../Context';

const Home = () => {
    const { loading, error } = useGlobalContext()

    if (loading) {
        return <div className="loading">
            <ul>
                <li>L</li>
                <li>O</li>
                <li>A</li>
                <li>D</li>
                <li>I</li>
                <li>N</li>
                <li>G</li>
            </ul>
        </div>
    }

    return <div className="home-page">

        <SearchForm />
        {error && <div>
            <p>Network Error</p>
        </div>}
        {!error && <CocktailList />}

    </div>
}
export default Home;