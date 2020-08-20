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

    handleLinkClick = async event => {
        event.preventDefault();
        let sortedResults = this.state.employees.sort((a, b) => {
            return a.name.first > b.name.first ? 1 : -1
        });
        await this.setState({
            searchResults: sortedResults
        })

    };

    handleInputChange = async event => {
        event.preventDefault();
        let searchInput = event.target.value.toLowerCase();
        await this.setState({
            searchTerm: searchInput,
            searchResults: this.state.employees.filter(employee =>
                employee.name.first.toLowerCase().includes(searchInput) ||
                employee.name.last.toLowerCase().includes(searchInput)
            )
        });
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
                    handleLinkClick={this.handleLinkClick}
                />
            </Container>     
        );
    }
}

export default Directory;