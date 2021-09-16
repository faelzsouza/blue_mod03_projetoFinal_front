import { Route, Switch } from "react-router";
import "./App.scss";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import Home from "./pages/Home/Home";
import TarefaAdd from "./pages/TarefaAdd/TarefaAdd";
import TarefaDetails from "./pages/TarefaDetails/TarefaDetails";
import TarefaEdit from "./pages/TarefaEdit/TarefaEdit";

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/newToDo" component={TarefaAdd} />
                <Route path="/details/:id" component={TarefaDetails} />
                <Route path="/edit/:id" component={TarefaEdit} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
