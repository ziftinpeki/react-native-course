import React, { useState } from "react";
import { Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";

import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => result.price === price);
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text> {errorMessage}</Text> : null}
      <ScrollView>
        <ResultList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultList results={filterResultsByPrice("$$")} title="Bit Pricier" />
        <ResultList results={filterResultsByPrice("$$")} title="Big Spending" />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
