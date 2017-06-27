import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoListItem from './components/video_list_item';

/* API Keys */
const API_KEY = 'Q';

// YTSearch({ key: API_KEY, term: 'surfboards'}, (data)=>{
//    console.log(data);
// });

//Class based component
class App extends Component {

    constructor(props){
        super(props);

        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: 'surfboards'}, (videos)=>{
            this.setState({ videos });
        });
    }

    //Render and pass props
    render(){
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}


//Functional Component
// const App = () => {
//   return (
//       <div>
//     <SearchBar />
//   </div>
//   );
// }

ReactDOM.render(<App />, document.querySelector(".container"));
