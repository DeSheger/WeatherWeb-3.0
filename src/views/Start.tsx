import { useState } from "react";
import Typewriter from "../tools/Typewriter";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Menu from "../components/Menu";
import Layout from "./Layout";
import SearchForm from "../components/SearchForm";
import Main from "./Main";
import Moon from "../components/Moon";


function Start() {

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