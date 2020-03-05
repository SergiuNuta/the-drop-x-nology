import React, { Component } from "react";
import styles from "./FanDashboard.module.scss";
import SearchBar from "../../components/Utility/SearchBar";
import Header from "../../components/Utility/Header";
import ReleaseCardList from "../../components/Main/FanDashboard/ReleaseCardList";

class FanDashboard extends Component {
    render() {
        return (
            <section className={styles.FanDashboard}>
                <Header title={"Fan Dashboard"} />
                <SearchBar placeHolder={"Search Artists..."} /> 
                <ReleaseCardList />
            </section>
        );
    }
}

export default FanDashboard;
