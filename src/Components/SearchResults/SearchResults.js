import SearchResult from './SearchResult'

const SearchResults = ( {results, getDetail} ) => {
    
    return (
        <div className = 'results'>
            {results.map((result) => (
                <SearchResult 
                key = {result.mal_id} 
                result = {result} 
                getDetail = {getDetail}
                />
            ))}
        </div>
    )
}

export default SearchResults