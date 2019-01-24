import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter, Route, Link, NavLink, Switch} from "react-router-dom";
import KanalyScripts from './data.js';

class TEST1 extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick2 = () => {
        this.props.clickMethod(this.props.changeNum);
    };
    render() {
        if (this.props.show === true) {
            return <button onClick={this.handleClick2}>Elo!</button>  
        } else {
            return null;
        }
    }
}

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scripts: this.props.scripts,
            element: true,
            itemDetail: {},
        };
        this.handleClick = this.handleClick.bind(this);
        this.resetClick = this.resetClick.bind(this);
        this.changeClick = this.changeClick.bind(this);
    }

    handleClick = e => {
        e.preventDefault();
        console.log(this.input.value);
        if (this.input.value < 1 || this.input.value > this.state.scripts.length) {
            window.alert("nieprawidlowe gunwo");
            this.input.value = "";
        } else {
            this.setState({
                itemDetail: this.state.scripts[this.input.value - 1],
                element: false
            });
            this.input.value = "";
        }
    };
    resetClick = e => {
        this.setState({
            element: true
        });
    };
    changeClick = (paramFromChildren) => {
        // console.log(paramFromChildren);
        this.setState({
            itemDetail: this.state.scripts[paramFromChildren - 1],
        });
    };
    render() {
        if (this.state.element === true) {
            return (
                <div>
                    <h1>Wyswietlanie na true</h1>
                    <form>
                        <input type="number" ref={input => { this.input = input; }} />
                        <button onClick={this.handleClick}>Go!</button>
                    </form>
                </div>
            );
        } else {
            return (
                <div>
                    <h2>{this.state.itemDetail.id}</h2>
                    <div>{this.state.itemDetail.name}</div>
                    <div>{this.state.itemDetail.pesel}</div>
                    <TEST1 show={this.state.itemDetail.show} changeNum={this.state.itemDetail.change} clickMethod={this.changeClick}></TEST1>
                    <button onClick={this.resetClick}>Wroc do gry</button>
                </div>
            );
        }
    }
}

class MainContentPartI extends React.Component {
    render() {
        return (
            <div>
                <MainContent scripts={KanalyScripts}></MainContent>
                <Link to="/menu">WRÓĆ</Link>
            </div>
        );
    }
}

class Rules extends React.Component {
    render() {
        return(
            <div>
                <p>LOREM LOREM</p>
                <p>LOREM LOREM</p>
                <p>LOREM LOREM</p>
                <Link to="/menu">WRÓĆ</Link>
            </div>
        );
    }
}

class Menu extends React.Component {
    render() {
        return(
            <div>
                <Link to="/scripts">LINK DO SCRIPTS</Link>
                <Link to="/rules">LINK DO RULES</Link>
            </div>
        );
    }
}

class MainTitle extends React.Component {
    render() {
        return (
            <div className="main-title"><Link to="/menu">OPOWIEŚCI ZE ZNISZCZONEGO MIASTA</Link></div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={MainTitle} />
                    <Route path="/menu" component={Menu} />
                    <Route path="/rules" component={Rules} />
                    <Route path="/scripts" component={MainContentPartI} />
                </Switch>
            </HashRouter>
        );
    }
}

document.addEventListener("DOMContentLoaded", function () {
    ReactDOM.render(<App />, document.getElementById("root"));
});

// return (
//     <Route render={({location}) => (
//         <TransitionGroup>
//             <CSSTransition key={location.pathname.split("/")[1] || "/"} timeout={{ enter: 1000, exit: 50 }} classNames="fade">
//                 <Switch location={location}>
//                     <Route exact path="/" component={FirstPage} />
//                     <Route path="/projects" component={SecondPage} />
//                     <Route path="/contact" component={ThirdPage} />
//                     <Route component={NotFound} />
//                 </Switch>
//             </CSSTransition>
//         </TransitionGroup>
//     )} /> 
// );

// 1. pomysl - jak bedzie sie wyswietlal skrypt to na dole powienien byc ( ale chyba nie zawsze ), button wroc do gry - mechanicznie mozne on poprostu zmieniac state na false co spowoduje powrot do inputu, ha!

// 2. trzeba by jeszcze wprowadzić przejscia do innych skryptów pod buttonami gdy jest taka potrzeba, ale nie mam narazie pomyslu co i jak...

// --------------------------------------------------------------------------------------------------------

// class GivePassword extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isLoggedIn: false,
//             error: "please provide pwd"
//         };
//     }
    // handleClick = e => {
    //     if (this.props.pwd === this.input.value) {
    //         this.setState({
    //             isLoggedIn: true
    //         });
    //     } else {
    //         this.setState({
    //             error: "You're wrong! Go away!"
    //         });
    //     }
    // };
//     render() {
//         if (this.state.isLoggedIn) {
//             return <h1>I'm in...</h1>;
//         } else {
//             return (
//                 <div>
//                     <h1>{this.state.error}</h1>
//                     <input
//                         type="password" ref={input => { this.input = input; }} />
//                     <button onClick={this.handleClick}>Go!</button>
//                 </div>
//             );
//         }
//     }
// }

// function App() {
//     return <GivePassword pwd={"qwe123"} />;
// }

// -------------------------------------------------------------------------------------------

// function PeopleList(props) {
//     const result = props.people.map((person,index) => { // people odnosi sie do props, aby nie korzystac z surowych danych z importu
//         return <li key={index}>{person.name} {person.pesel}</li>
//     })
//     return (
//         <ul>
//             {result}
//         </ul>
//     );
// }

// function App() {
//     return <PeopleList people={people}/> // props odnosi sie do importu
// }

// document.addEventListener('DOMContentLoaded', function(){
//     ReactDOM.render(
//         <App />,
//         document.getElementById('app')
//     );
// });