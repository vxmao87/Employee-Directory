import React from "react";
import "./style.css";

function SearchForm(props) {
    return (
        <form>
            <div className="form-group col-md-auto">
                <label for="employeeSearchTerm">Enter your search terms here: </label>
                <input 
                    className="form-control" 
                    id="searchTerm" 
                    placeholder="John Moe"
                    onChange={props.handleInputChange}>
                </input>
            </div>
        </form>
    );
}

export default SearchForm;