import CurrentWeatherForm from "../components/CurrentWeather";
import Menu from "../components/Menu";
import Layout from "./Layout";
import Main from "./Main";


function Current() {
    return (
        <Layout>
            <Menu />
            <Main>
                <CurrentWeatherForm />
            </Main>
        </Layout>
    );
}

export default Current;