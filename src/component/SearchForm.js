import React, { useRef } from "react"
import { useGlobalContext } from "../Context"

export const SearchForm = () => {
    const searchValue = React.useRef('')
    const { setSearchTerm, getCocktail } = useGlobalContext();

    const onhandleSubmit = (e) => {
        e.preventDefault()
        setSearchTerm(searchValue.current.value);
        searchValue.current.value = ''
    }
    const onhandleChange = (e) => {
        setSearchTerm(searchValue.current.value);
    }
    const onhandleClick = () => {
        setSearchTerm(searchValue.current.value);
    }

    return <div className="search-form">
        <form onSubmit={onhandleSubmit}>

            <label htmlFor="search">
                Search Your Favourite Cocktail
            </label>
            <input type="text"
                name="search"
                id="search"
                className="search"
                autoFocus
                ref={searchValue}
                placeholder="Need to think about(not working rightnow)"
                onChange={(e) => onhandleChange(searchValue)} />

            <button className="btn search-btn"
                onClick={onhandleClick}
            >Find</button>
        </form>
    </div>
}