import Layout from "./Navbar/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageOne from "./pages/Layanan";
import PageTwo from "./pages/Venue";
import PageThree from "./pages/Dress";
import PageCTA from "./pages/Masuk";
import PageFour from "./pages/Contact";
import PageRegister from "./pages/Daftar";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/page-one">
                    <PageOne />
                </Route>
                <Route path="/page-two">
                    <PageTwo />
                </Route>
                <Route path="/page-three">
                    <PageThree />
                </Route>
                <Route path="/page-four">
                    <PageFour />
                </Route>
                <Route path="/page-cta">
                    <PageCTA />
                </Route>
                <Route path="/page-register">
                    <PageRegister />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
