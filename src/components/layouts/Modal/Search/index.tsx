import React, { useContext } from "react";
import { ModalSearch } from "./styles";

//Context
import { ModalControllerContext } from "context/ModalController";
import { SearchModalProvider } from "context/SearchModalContext";
import ContentLoaded from "./ContentLoaded";

const Search = () => {
	//Context
	const { searchModal } = useContext(ModalControllerContext);

	return <ModalSearch hide={!searchModal} >
		<SearchModalProvider>
			<ContentLoaded />
		</SearchModalProvider>
	</ModalSearch>
}

export default Search;