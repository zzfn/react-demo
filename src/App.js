import React from 'react';
import {BrowserRouter as Router, Route,Link,Switch} from "react-router-dom";
import './App.css';

function Login() {
    return <div>login</div>
}
function Home({children}) {
    return <div>
        <Link to={'/'}>home</Link>--
        <Link to={'/1'}>1</Link>--
        <Link to={'/2'}>2</Link>
        {children}
    </div>
}
function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/login" component={Login}/>

                    <Route path="/" render={() => <div>
                        <Home>
                                <Route exact  path="/" render={() => <div>home</div>}/>
                                <Route  path="/1" render={() => <div>1</div>}/>
                                <Route  path="/2" render={() => <div>2</div>}/>
                        </Home>
                    </div>}/>

                </Switch>
            </Router>
        </div>
    );
}

export default App;
