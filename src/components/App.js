import React from 'react';
import SearchBar from "./SeachBar";
import ImageList from "./ImageList";
import unsplash from "../api/unsplash";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            isLoading: false
        }
    }



    onSearchSubmit = async (term) => {
        // console.log(term);
        try {
            this.setState({isLoading:true});
            const result = await unsplash.get("/search/photos", {
                params: { query: term }
            });
            
            this.setState({ images: result.data.results, isLoading:false});
        } catch(error) {
            console.log(error);
            this.setState({isLoading:false});
        }
    }

    render = () => {
        return (
            <div className="ui container" style={{marginTop: "10px"}}>
                <h1 className="ui center aligned header" style={{marginTop: "1.2em", marginBottom:"0.3em"}}>Unsplash Image Searcher</h1>
                <h4  className="ui center aligned header" style={{marginTop:"0", marginBottom:"3em"}}>A unage search tool that uses Unsplash API</h4>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                {
                    this.state.isLoading?
                    <div className="loader"></div>:
                    <ImageList images={this.state.images}/>
                }
                {/* <ImageList images={this.state.images}/> */}
            </div>
        )
    }
}

export default App;