import ForecastWeatherForm from "../components/ForecastWeatherForm";
import Menu from "../components/Menu";
import Layout from "./Layout";
import Main from "./Main";

const Weekly = () => {
    return (
        <Layout>
            <Menu />
            <Main>
                <ForecastWeatherForm />
            </Main>
        </Layout>
    );
}

export default Weekly;