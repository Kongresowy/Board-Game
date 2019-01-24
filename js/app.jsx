import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter, Route, Link, NavLink, Switch} from "react-router-dom";
import KanalyScripts from './data.js';

class TRANS extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick2 = () => {
        this.props.clickMethod(this.props.changeNum);
    };
    render() {
        if (this.props.show === true) {
            return <div onClick={this.handleClick2}>{this.props.transText}</div>
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
            window.alert("Nieprawidłowy numer skryptu!");
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
                <div className="input-class">
                    <h2>WYSZUKAJ SKRYPT :</h2>
                    <form>
                        <input type="number" ref={input => { this.input = input; }} />
                        <button onClick={this.handleClick}>Go!</button>
                    </form>
                    <Link to="/menu">WRÓĆ DO MENU</Link>
                </div>
            );
        } else {
            return (
                <div className="script-class">
                    <h2>{this.state.itemDetail.id}</h2>
                    <p>{this.state.itemDetail.text}</p>
                    <p>{this.state.itemDetail.rule}</p>
                    <TRANS show={this.state.itemDetail.show1} changeNum={this.state.itemDetail.changeTo1} clickMethod={this.changeClick} transText={this.state.itemDetail.transText1} />
                    <TRANS show={this.state.itemDetail.show2} changeNum={this.state.itemDetail.changeTo2} clickMethod={this.changeClick} transText={this.state.itemDetail.transText2} />
                    <TRANS show={this.state.itemDetail.show3} changeNum={this.state.itemDetail.changeTo3} clickMethod={this.changeClick} transText={this.state.itemDetail.transText3} />
                    <div onClick={this.resetClick}>{this.state.itemDetail.reset}</div>
                    <Link to="/menu">WRÓĆ DO MENU</Link>
                </div>
            );
        }
    }
}

class MainContentPartI extends React.Component {
    render() {
        return (
            <div>
                <h1 className="main-content-title">CZĘŚĆ I: KANAŁY</h1>
                <MainContent scripts={KanalyScripts}></MainContent>
            </div>
        );
    }
}

class Rules extends React.Component {
    render() {
        return(
            <div className="rules">
                <h2>OMÓWIENIE ZASAD</h2>
                <p>Reguły znajdujące się na planszy mogą modyfikować reguły znajdujące się w Dzienniku lub instrukcji rozszerzenia. Reguły znajdujące się na kartach mogą modyfikować reguły planszy, Dziennika i instrukcji rozszerzenia, zaś reguły znajdujące się w skryptach lub na arkuszach Scenariuszy mogą modyfikować wszystkie wcześniejsze.</p>
                <p>Gdy kilka reguł mówi o tym, by wykonać jakąś czynność w tym samym momencie (np. na początku fazy X), wtedy sami decydujecie o kolejności rozpatrzenia tych poleceń.</p>
                <p><b>This War of Mine: Gra Planszowa</b> to duża, skomplikowana i rozbudowana gra. Z pewnością wystąpią czasem sytuacje nieopisane dokładnie przez reguły i będziecie mieli wątpliwości, których nie wozwieją nawet skrypty FAQ. W tych miejscach kierujcie się rozsądkiem i zawsze wybierajcie interpretację możliwie najlepiej oddającą to, jak wyglądałoby to w realnym świecie. Zachęcamy również do zapoznania się z regularnie aktualizowanym dokumentem FAQ do pobrania ze strony wydawnictwa:</p>
                <p>www.galakta.pl/this-war-of-mine-gra-planszowa</p>
                <p>Pamiętajcie jednak, że wiele z reguł gry jest ukrytych i odnajdziecie je dopiero w trakcie rozgrywki. Ponadto niektóre z reguł wydadzą się wam na początku mało znaczące, a ich skutecznego używania nauczycie się dopiero wraz z rosnącym doświadczeniem. To stopniowe poznawanie strategii i ukrytych mechanizmów rządzących światem gry jest również częścią rozgrywki.</p>
                <h3>JAK UŻYWAĆ KRONIK WOJENNYCH I</h3>
                <p>Podobnie jak w przypadku Księgi Skryptów z gry podstawowej, nie czytaj żadnego z numerowanych skryptów znajdujących się w tej książce, dopóki jakiś zapis na karcie, planszy, żetonie lub w innym skrypcie nie wskaże ci konkretnego numeru. Wtedy odszukaj skrypt o takim numerze i rozpatrz go.</p>
                <p><b>Nigdy nie czytaj skryptów w całości na głos</b> - to najprostszy sposób do zanudzenia innych graczy i wyprania rozgrywki z emocji.</p>
                <p>Jeśli rozpatrujesz skrypt, przeczytaj go sam, a następnie, <b>najlepiej jak potrafisz, opowiedz własnymi słowami, co się dzieje</b>. Możesz przekazywać treść skryptu na bieżąco, fragment po fragmencie, lub najpierw przeczytać całość, a następnie ją streścić.</p>
                <p>Na głos możesz odczytać cytowaną treść listu lub notatki (zapisaną <i>kursywą</i>).</p>
                <p>Oczywiście, w przypadku, gdy absolutnie nie potrafisz przedstawić opisanych w skrypcie wydarzeń własnymi słowami, w ostateczności możesz odczytać tekst na głos, ale rozgrywka na tym straci.</p>
                <p>Gdy trafisz na skrypt z wyborami lub dalszym ciągiem, po zakończeniu rozpatrywania każdego pojedynczego skryptu Dziennik (i tym samym funkcja Lidera) <b>przechodzi na kolejnnego gracza</b>.</p>
                <p>Skrypty w tej książce są podzielone na 3 części odpowiadające różnym modułom w grze:</p>
                <p>Część 1: Kanały zawiera skrypty z modułu Kanały oznaczone literą "s".</p>
                <p>Część 2: Rolnicy zawiera skrypty z modułu Rolnicy powiązane z Targiem i oznaczone literą "f".</p>
                <p>Część 3: Epizody zawiera skrypty ze Scenaruszy. Została ona dodatkowo podzielona na rozdziały odpowiadające tytułom Scenariuszy. Skrypty w obrębie danego rozdziału opatrzono numerami. Arkusze Scenariuszy i karty posiadają odpowiednio odnośniki do tych samych numerów.</p>
                <h3>PUSTE ŻETONY A ŻETONY A,B,C...</h3>
                <p>Wiele skryptów nakazuje zapisanie hasła oraz numeru skryptu na Pustym żetonie.</p>
                <p>W tej sytuacji weź jeden z dołączonych do gry Pustych żetonów i zapisz na nim (np. długopisem) wymagany tekst.</p>
                <p>Gdy reguły nakazują usunąć Pusty żeton, na którym zapisałeś tekst, nie przyda się już nigdy więcej w żadnej rozgrywce.</p>
                <p>Jeśli w pudełku zabraknie Pustych żetonów, wtedy skorzystaj z niebieskich żetonów oznaczonych A, B, C... etc. W takim przypadku zapisz odpowiednią literę w polu Notatek na Arkuszu Archiwum i zamieść przy niej wymagany tekst, zaś jako odpowiadający tej notatce Pusty żeton użyj żetonu z taką właśnie literą.</p>
                <h3>ROZMOWY PODCZAS ROZGRYWKI</h3>
                <p><b>This War of Mine: Gra Planszowa</b> to gra w pełni kooperacyjna, oparta przede wszystkim na tworzonej historii oraz na podejmowanych przez was wyborach. Najważniejszą częścią rozgrywki jest tu komunikacja między graczami, wspólne omawianie pomysłów i planów, odgrywanie ról, wzbogacanie narracji, wymiana refleksji nad sytuacją, tak dotyczących mechanicznej warstwy rozgrywki, jak i jej strony fabularnej.</p>
                <p>Równie ważne, jak to, czy uda wam się przetrwać do końca, jest to, jaką historię wspólnie stworzycie i jak ją zapamiętacie. To, co dzieje się ponad planszą, pomiędzy graczami, jest tu równie ważne jak to, co dzieje się na planszy. Pod tym względem rozgrywka w <b>THIS WAR OF MINE: GRĘ PLANSZOWĄ</b> podobna jest bardziej do gry fabularnej.</p>
                <p>Możecie dodawać do gry wiele od siebie, ubarwiać sceny, opisywać swoje emocje, odgrywać role. Starajcie się interpretować nawet abstrakcyjne efekty reguł w odniesieniu do toczącej się historii i do uczestniczących w niej postaci. Podczas rozgrywki macie pełną swobodę komunikacji. Bardzo lekkie reguły gry wieloosobowej powstały właśnie po to, by być bazą dla rozgrywki opartejk na rozmowach między graczami.</p>
                <h3>6 GRACZY</h3>
                <p>Do rozgrywki na 6 graczy zalecana jest dobra znajomość gry przez większość graczy. Przy 6 graczach uczących się dopiero gry towarzyszące temu spowolnienie może popsuć płynność rozgrywki.</p>
                <Link to="/menu">WRÓĆ DO MENU</Link>
            </div>
        );
    }
}

class Menu extends React.Component {
    render() {
        return(
            <div className="menu">
                <Link to="/scripts">CZEŚĆ I: KANAŁY</Link>
                <Link to="/rules">OMÓWIENIE ZASAD</Link>
            </div>
        );
    }
}

class MainTitle extends React.Component {
    render() {
        return (
            <div className="main-title"><Link to="/menu"></Link></div>
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