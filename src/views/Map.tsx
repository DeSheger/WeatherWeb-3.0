import Menu from "../components/Menu";
import WeatherMap from "../components/WeatherMap";
import Layout from "./Layout";
import Main from "./Main";

const Map = () => {
    return (
        <Layout>
            <Menu />
            <Main>
                <WeatherMap />
            </Main>
        </Layout>
    );
}

export default Map;