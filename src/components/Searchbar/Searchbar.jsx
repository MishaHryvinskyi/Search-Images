import { useState } from "react";
import Notiflix from "notiflix";
import { Search, IconSearch } from "./Searchbar.styled";

export const Searchbar = ({ onSubmitSearch }) => {
    const [search, setSearch] = useState('');

    const handleChange = ({ target: { value } }) => {
        setSearch(value.toLowerCase());
    }

    const handleSubmit = event => {
        event.preventDefault();

        if(search.trim() === '') {
            return Notiflix.Notify.failure("Enter anything you're looking🔍 for")
        }
       onSubmitSearch(search);
       setSearch('')
    }

        return (
            <Search>
                <form onSubmit={handleSubmit}>
                    <button type="submit">
                        <IconSearch />
                    </button>

                    <input
                    value={search}
                    onChange={handleChange}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    />
                </form>
            </Search>
        )
}

// classes component

// import React, { Component } from "react";
// import Notiflix from "notiflix";
// import { Search, IconSearch } from "./Searchbar.styled";

// export default class Searchbar extends Component {
//     state = {
//         search: '',
//     }

//     handleChange = ({ target: { value } }) => {
//         this.setState({ search: value.toLowerCase() });
//     }

//     handleSubmit = event => {
//         event.preventDefault();
//         const { search } = this.state;

//         if(search.trim() === '') {
//             return Notiflix.Notify.failure("Enter anything you're looking🔍 for")
//         }
//         this.props.onSubmitSearch(search);
//         this.resetForm();
//     }

//     resetForm = () => {
//         this.setState({
//             search: '',
//         })
//     }

//     render() {
//         return (
//             <Search>
//                 <form onSubmit={this.handleSubmit}>
//                     <button type="submit">
//                         <IconSearch />
//                     </button>

//                     <input
//                     value={this.state.search}
//                     onChange={this.handleChange}
//                     type="text"
//                     autoComplete="off"
//                     autoFocus
//                     placeholder="Search images and photos"
//                     />
//                 </form>
//             </Search>
//         )
//     }
// }