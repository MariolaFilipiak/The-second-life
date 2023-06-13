import { Link } from 'react-router-dom'
import "./style.css"

const Error = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h2>Ooops! Something went wrong... <br/>
          Please check your network connection and try again</h2>
        </div>
        <Link to="/">Go To Homepage</Link>
      </div>
    </div>
  )
}

export default Error