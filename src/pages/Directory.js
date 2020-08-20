import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";
import Row from "../components/Row";
import EmployeeTable from "../components/EmployeeTable";

class Directory extends Component {
    state = {
        searchTerm: "",
        employees: {},
        searchResults: {}
    };

    componentDidMount = () => {
        API.getEmployees().then(res => {
            console.log(res.data.results);
            this.setState({
                employees: res.data.results,
                searchResults: res.data.results
            });
        }).catch(err => console.log(err));
    };

    handleBtnClick = event => {

    };

    handleInputChange = event => {

    };

    sortEmployeesByName = () => {
        
    };

    render() {
        return (
            <Container>
                <Jumbotron />
                <SearchForm
                    handleInputChange={this.handleInputChange}
                    value={this.searchTerm}
                />
                <EmployeeTable
                    results={this.state.searchResults}
                />
            </Container>     
        );
    }
}

export default Directory;