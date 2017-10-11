import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoListItem from './components/video_list_item';
import VideoDetail from './components/video_detail';

/* API Keys */
const API_KEY = 'AIzaSyCZCQZFW0YgH9Xv6YKIAjdVArioMJB8OBQ';

//Class based component
class App extends Component {

    constructor(props){
        super(props);

        this.state = {
          videos: [],
          selectedVideo: null,
          searchTerm: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
      YTSearch({ key: API_KEY, term: term}, (videos) => {
          this.setState({
            videos: videos,
            selectedVideo: videos[0]
          });
      });
    }

    //Render and pass props
    render(){
        return (
            <div>
                <SearchBar onSearchTermChange = {term => this.videoSearch(term)} />
                <VideoDetail video= {this.state.selectedVideo} />
                <VideoList
                  onVideoSelect = { selectedVideo => this.setState({selectedVideo})}
                  videos={this.state.videos} />
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
