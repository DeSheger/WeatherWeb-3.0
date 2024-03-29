import CurrentWeatherForm from "../components/CurrentWeatherForm";
import Menu from "../components/Menu";
import Layout from "./Layout";
import Main from "./Main";


const Current = () => {
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