import { useState } from "react"

function SearchBar({onSearch}){
    const [query, setQuery] = useState("")

    function handleChange(e){
        setQuery(e.target.value)
    }

    function handleSubmit(e){
        onSearch(query)
    }

    return(
        <div className="relative w-44">
        <input type="text" value={query} onChange={handleChange} 
        placeholder="Search Movies"
        className="w-full px-3 py-2 rounded-full bg-space-card border border-space-navy
        text-star-white outline-none focus:border-accent-purple transition-all duration-300
        placeholder:text-moon-gray" onKeyDown={e => { if (e.key === 'Enter') handleSubmit()}}/>
        <button className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-gray-800 rounded-full"
        onClick={handleSubmit}
        >🔍</button>
        </div>
    )
}
export default SearchBar