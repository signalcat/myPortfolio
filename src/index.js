import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAsFQ_PosZtet8zGfyE1IXzTCJ8ZDjjzts';


//create a new component. This component should produce some html
class App extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			videos: [],
			selectedVideo: null 
		};

		this.videoSearch('deep ocean technology');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY , term: term}, (videos) => {
			this.setState({ 
				videos: videos, 
				selectedVideo: videos[0]
			});
		}); 
	}

	render() {
		return (
			<div>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
				
				<VideoDetail video={this.state.selectedVideo} />

				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} />
			</div>
		);
	}
}

//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container#reactExample'));