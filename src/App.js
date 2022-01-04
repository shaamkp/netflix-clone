import logo from './logo.svg';
import './App.css';
import Row from './components/screens/Row';
import Banner from './components/screens/Banner'
import requests from './request';

function App() {
  return (
    <div className='App'>
    <Banner />
    <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
    <Row title="Trending" fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
    <Row title="Action" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Documentry" fetchUrl={requests.fetchDocumentries}/>
    </div>
    
     
  );
}

export default App;
