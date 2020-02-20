import React from 'react';
import logo from './logo.svg';
import CardList from "./CardList";
import SearchBox from './SearchBox.js';
import {films} from "./Films";
import './App.css';
import Scroll from "./Scroll";
const { ipcRenderer } = window;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: '',
      appVersion: '',
      films: films,
      searchField: '',
      channels: props.channels
    };
     console.log(props.channels)
     console.log(this.state.channels)
    // const channels = props.channels
    // ipcRenderer.send(channels.APP_INFO);
    // ipcRenderer.on(channels.APP_INFO, (event, arg) => {
    //   ipcRenderer.removeAllListeners(channels.APP_INFO);
    //   const { appName, appVersion } = arg;
    //   this.setState({ appName, appVersion });
    // });


  }

  componentDidMount() {
    console.log(ipcRenderer)
    fetch('http://localhost:3001/films')
        .then(response=> response.json())
        .then(filmsRec => this.setState({films:filmsRec}))
}

onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
}

quit = (event) => {
    console.log(this.state)
    ipcRenderer.send(this.state.channels.APP_CLOSE)
    ipcRenderer.on (this.state.channels.APP_CLOSE, (event, arg) => {
        console.log(event, arg)
    })
}

playMovie = (file) => {
    fetch("http://localhost:3001/play", {
        method: "POST",
        headers: {
            "Accept" : "application/json",
            "content-type" : "application/json"
        },
        body: JSON.stringify({
            film: file
        })
    })
        .then((response) => {
            console.log(response.status)
        })
}

    render() {

        const filteredFilms = this.state.films.filter(films => {
            return films.file.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div className={'tc'}>

                <h1 className={'topH'}>Rear Seat Entertainment</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <a class="example_a" href="add-website-here" onClick={this.quit}>quit</a>
                {/* <button onClick={this.quit}>
                    Click me!
                </button> */}
                <Scroll>
                    <CardList films={filteredFilms} playMovie={this.playMovie}/>
                </Scroll>
            </div>

        )
    }

}

export default App;
