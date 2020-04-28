import React from 'react';
import SearchBar from "./SeachBar";
import ImageList from "./ImageList";
import unsplash from "../api/unsplash";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
    }

    onSearchSubmit = async (term) => {
        console.log(term);
        try {
            const result = await unsplash.get("/search/photos", {
                params: { query: term }
            });
            
            this.setState({ images: result.data.results});
        } catch(error) {
            console.log(error);
        }
    }

    render = () => {
        return (
            <div className="ui container" style={{marginTop: "10px"}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App;