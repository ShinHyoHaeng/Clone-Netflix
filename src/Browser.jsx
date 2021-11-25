import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'

function Browser(){
    return (
        <BrowserRouter basename="/Clone-Netflix">
            <App/>
        </BrowserRouter>
    )
}

export default Browser