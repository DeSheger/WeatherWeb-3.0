import { useState } from "react";
import Typewriter from "../tools/Typewriter";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Menu from "../components/Menu";
import Layout from "./Layout";
import SearchForm from "../components/SearchForm";


function Start() {

    return (
        <Layout>
            <Menu />
            <SearchForm />
        </Layout>
    );
}

export default Start;