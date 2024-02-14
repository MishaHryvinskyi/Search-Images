import Notiflix from "notiflix";
import React, { Component } from "react";
import { 
    Search,
    IconSearch, 
    SearchForm, 
    SearchFormBtn, 
    SearchInput 
} from "./Searchbar.styled";

export default class Searchbar extends Component {
    state = {
        search: '',
    }

    handleSubmit = event => {
        event.preventDefault();
        const { search } = this.state;

        if(search.trim() === '') {
            return Notiflix.Notify.failure("Enter anything you're looking🔍 for")
        }
        this.props.onSubmitSearch(search);
        Notiflix.Notify.success(` ${search}`)
        this.resetForm();
    }

    handleChange = event => {
        const { value } = event.currentTarget;
        this.setState({ 
            search: value.toLowerCase()
        })
    }

    resetForm = () => {
        this.setState({ search: '' })
    }

    render() {
const { search } = this.state;

        return (
            <Search>
                <SearchForm onSubmit={this.handleSubmit}>
                    <SearchFormBtn type="submit">
                    <IconSearch />
                    </SearchFormBtn>

                    <SearchInput
                    onChange={this.handleChange}
                    value={search}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    />
                </SearchForm>
            </Search>
        )
    }
}