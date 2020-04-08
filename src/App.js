import React from 'react';
import './App.css';
const nostra = window.nostra;
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            map: {},
            loaded: true
        };
    }
    componentDidMount() {
        nostra.onready = () => {
            nostra.config.Language.setLanguage(nostra.language.E);
            this.initialize();
        };
    }
    initialize = () => {
        var baseMapCountry = "TH";
        var map = new nostra.maps.Map("map", {
            id: "mapTest",
            logo: true,
            scalebar: true,
            basemap: "streetmap",
            slider: true,
            level: 15,
            lat: 13.722944,
            lon: 100.530449,
            country: baseMapCountry
        });
        map.events.layerAddComplete = function (e) {
            if (!this.state.loaded) {
                //hideLoading();
            }
        };
        map.events.load = () => {
            //hideLoading();
            this.setState({
                loaded: false
            });
        };
        this.setState({
            map: map
        });
    }
    render() {
        return (
            <div className="Mapsize" id="map"></div>
        )
    }
}
export default App;