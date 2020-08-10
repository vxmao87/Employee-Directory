import React from "react";
import "./style.css";

function SearchForm(props) {
    return (
        <form>
            <div class="form-group col-md-auto">
                <label for="employeeSearchTerm">Enter your search terms here: </label>
                <input class="form-control" id="searchTerm" placeholder="John Moe"></input>
            </div>
        </form>
    );
}

export default SearchForm;