import React, { useContext } from 'react';
import HeaderSearch from './HeaderSearch';
import { ContainerModalSearch , IconCloseModal } from './styles';
import CoursesListSearch from './CoursesListSearch';
import { ModalControllerContext } from 'context/ModalController';
import { SearchModalContext } from 'context/SearchModalContext';
import Loading from 'components/common/Loading';
import { IoMdClose } from 'react-icons/io';

const ContentLoaded = () => {
	//Context
	const { updateStateSearchModal } = useContext(ModalControllerContext);
	const { isLoading } = useContext(SearchModalContext);
	
	//Actions
	const onCloseModal = () => updateStateSearchModal(false);

	if(isLoading) return <>
		<Loading center />
		<IconCloseModal onClick={onCloseModal}>
			<IoMdClose />
		</IconCloseModal>	
	</>

	return <>
		<ContainerModalSearch>
			<HeaderSearch title="Cuentanos, ¿Qué deseas buscar?" />
			<CoursesListSearch />
		</ContainerModalSearch>
		<IconCloseModal onClick={onCloseModal}>
			<IoMdClose/>
		</IconCloseModal>	
	</>
}

export default ContentLoaded;