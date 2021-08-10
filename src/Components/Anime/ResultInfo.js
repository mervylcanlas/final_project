import React from 'react'
import './ResultInfo.css'

function ResultInfo({result}) {
    return (
        <div className = 'resultInfo' key = {result.mal_id}>
            <div className = 'column_1'>
                <span><img src = {result.image_url} alt=''/></span>
                <div className = 'info'>
                    <span><b>Type: </b>{result.type && result.type}</span>
                    <span><b>Episodes: </b>{result.episodes && result.episodes}</span>
                    <span><b>Status: </b>{result.status && result.status}</span>
                    <span><b>Aired: </b>{result.aired.from && result.aired.from.slice(0,10)} to {result.aired.to && result.aired.to.slice(0,10)}</span>
                    <span><b>Premiered: </b>{result.premiered && result.premiered}</span>
                    <span><b>Broadcast: </b>{result.broadcast && result.broadcast}</span>
                    <span><b>Producers: </b> 
                        {result.producers && result.producers.map((producer) => (
                            <a key = {producer.mal_id} href = {producer.url} target = '_blank' rel = 'noreferrer'>{producer.name}  </a>
                        ))}
                    </span>
                    <span><b>Licensors: </b>
                        {result.licensors && result.licensors.map((licensor) => (
                            <a key = {licensor.mal_id} href = {licensor.url} target = '_blank' rel = 'noreferrer'>{licensor.name}  </a>
                        ))}
                    </span>
                    <span><b>Studios: </b> 
                        {result.studios && result.studios.map((studio) => (
                            <a key = {studio.mal_id} href = {studio.url} target = '_blank' rel = 'noreferrer'>{studio.name}  </a>
                        ))}
                    </span>
                    <span><b>Source: </b>{result.source}</span>
                    <span><b>Genres: </b> 
                        {result.genres && result.genres.map((genre) => (
                            genre.name + "  "
                        ))}
                    </span>
                    <span><b>Duration: </b>{result.duration && result.duration}</span>
                    <span><b>Rating: </b>{result.rating && result.rating}</span>
                </div>
            </div>
            <div className = 'column_2'>
                <h1>{result.title}</h1>
                <h3><i>{result.title_english && result.title_english} / {result.title_japanese && result.title_japanese}</i></h3>
                <h3>Synopsis</h3>
                <p>{result.synopsis && result.synopsis}</p>
                <h3>Related Anime</h3>
                <div className = 'adaptation'>
                    <span><b>Adaptation</b></span>
                    <span>{result.related.Adaptation && result.related.Adaptation.map((anime) => <div>{anime.name}</div>)}</span>
                    <span><b>Side Story</b></span>
                    <span>{result.related[`Side story`] && result.related[`Side story`].map((anime) => <div>{anime.name}</div>)}</span>
                    <span><b>Sequel</b></span>
                    <span>{result.related.Sequel && result.related.Sequel.map((anime) => <div>{anime.name}</div>)}</span>
                </div>
                {result.trailer_url &&
                <iframe src = {`${result.trailer_url}`} title = {result.mal_id && result.mal_id} />
                }
            </div>
        </div>
    )
}
export default ResultInfo
