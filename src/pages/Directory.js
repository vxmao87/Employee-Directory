import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";
import Row from "../components/Row";
import EmployeeCard from "../components/EmployeeCard";

class Directory extends Component {
    state = {
        searchTerm: "",
        employees: {},
        searchResult: {}
    };

    componentDidMount() {
        API.getEmployees().then(res => {
            console.log(res.data);
            this.setState({
                employees: res.data.results,
                searchResult: res.data.results
            });
        }).catch(err => console.log(err));
    }

    handleBtnClick = event => {

    }

    handleInputChange = event => {

    }

    sortEmployeesByName = () => {
        
    }

    render() {
        return (
            <Container>
                <Jumbotron />
                <Row>
                    <SearchForm
                        handleInputChange={this.handleInputChange}
                        value={this.searchTerm}
                    />
                </Row>
                <Row>
                    <EmployeeCard />
                </Row>
            </Container>     
        );
    }
}

export default Directory;