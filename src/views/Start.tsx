import Menu from "../components/Menu";
import Layout from "./Layout";
import SearchForm from "../components/SearchForm";
import Main from "./Main";
import Moon from "../components/Moon";


const Start = () => {
    return (
        <Layout>
            <Menu />
            <Main>
                <Moon />
                <SearchForm />
            </Main>
        </Layout>
    );
}

export default Start;