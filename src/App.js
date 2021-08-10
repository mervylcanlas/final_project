import { useState } from 'react'
import Header from './Components/Header/Header'
import SearchResults from './Components/SearchResults/SearchResults'
import ResultInfo from './Components/Anime/ResultInfo'
import Home from './Components/Home/Home'
import About from './Components/About/About'

const App = () => {

  const [results, setResults] = useState([])
  const [result, setResult] = useState({})
  const [resultsToggle, setResultsToggle] = useState(false)
  const [aboutToggle, setaboutToggle] = useState(false)
  const [homeToggle, setHomeToggle] = useState(true)
  const [animeToggle, setAnimeToggle] = useState(false)

  // Search
  const toSearch = ({text}) => {
    const keyword = encodeURI(text)
    const fetchUri = `https://api.jikan.moe/v3/search/anime?q=${keyword}&limit=20`
    const getResults = async () => {
      const resultsFromRequest = await fetchResults(fetchUri)
      setResults(resultsFromRequest.results)
      setResultsToggle(true)
      setHomeToggle(false)
      setAnimeToggle(false)
      setaboutToggle(false)
      setResult({})
    }
    getResults()
  }

  // ClickResult
  const getResultInfo = ({id}) => {
    const fetchUri = `https://api.jikan.moe/v3/anime/${id}`
    const getResults = async () => {
      const resultsFromRequest = await fetchResults(fetchUri)
      setResult(resultsFromRequest)
      setResultsToggle(false)
      setaboutToggle(false)
      setHomeToggle(false)
      setAnimeToggle(true)
    }
    getResults()
  }

  const fetchResults = async (fetchUri) => {
    const res = await fetch(fetchUri)
    const data = await res.json()
    return data
  }

  const toAbout = () => { 
    setaboutToggle(true)
    setResultsToggle(false)
    setHomeToggle(false)
    setAnimeToggle(false)
    setResult({})
  }

  const toHome = () => { 
    setResultsToggle(false)
    setaboutToggle(false)
    setHomeToggle(true)
    setAnimeToggle(false)
    setResult({})
  }

  return (
    <div className = "container">
      <Header onHome = {toHome} onSearch = {toSearch} onAbout = {toAbout}/>
      {homeToggle && <Home />}
      {aboutToggle && <About />}
      {resultsToggle && <SearchResults results = {results} getDetail = {getResultInfo}/> }
      {animeToggle && <ResultInfo result = {result}/> }
    </div>
  )
}

export default App
