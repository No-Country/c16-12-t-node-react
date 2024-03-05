import React from 'react';
import { SearchBar } from '../atoms/SearchBar';
import { SectionCards } from './SectionCards';
import Footer from './Footer';
import { Header } from './Header';

const SearchResults = () => {
  return (
    <div>
      <div className="block absolute top-0">
        <Header />
      </div>
      <div className="my-[650px] lg:my-[240px]">
        <div className="absolute top-12 left-0 right-0 mb-[20rem] mt-10">
          <SearchBar />
        </div>
        <SectionCards />
      </div>
      <Footer />
    </div>
  );
};

export default SearchResults;
