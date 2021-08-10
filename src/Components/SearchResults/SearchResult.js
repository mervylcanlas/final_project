import { useState } from "react";

const SearchResult = ({result, getDetail}) => {

    const [id] = useState(result.mal_id)

    const onResultClick = () => {
        getDetail({id})
    }

    return (
        <div className = 'result' onClick = {onResultClick}>
            <img src = {result.image_url} alt = ''/>
            <div className = 'title'>
                <h3>{result.title}</h3>
                <p>{result.synopsis}</p>
                <div style = {{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <span>Score: {result.score}</span>
                    <span>Type: {result.type}</span>
                    <span>Rated: {result.rated}</span>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
