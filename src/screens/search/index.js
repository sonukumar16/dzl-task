import React from 'react';

import SearchHeader from '../../components/SearchHeader';
import SearchForm from '../../components/SearchForm';
import SearchResults from '../../components/SearchResults';

const Search =()=>  {
    return (
      <div>
        <SearchHeader>
          <SearchForm />
        </SearchHeader>
        <div className="container">
            <SearchResults />
        </div>
      </div>
    );
  }

export default Search;
