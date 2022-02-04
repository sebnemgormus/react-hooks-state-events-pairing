import video from "../data/video";
import 'semantic-ui-css/semantic.min.css';
import Comments from "./Comments";
import Details from "./Details";

function App() {

  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
     <Details />
     <Comments />
     
    </div>
  );
}

export default App;