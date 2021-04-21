import React from "react";
import { FaRegEdit } from "react-icons/fa";
import classNames from "classnames";
import ShowOnlyUser from "../../../../../components/pages/User/ShowUserOnly";
import { withProps } from "recompose";

const EditableButtonChange = ({ selectable, textSelectable, onClick }) => {
	return (
		<ShowOnlyUser>
			<div className="editor-button" onClick={onClick}>
				<span className={selectable}>{textSelectable}</span>
				<FaRegEdit size={15} className={selectable} />
			</div>
		</ShowOnlyUser>
	);
};

const editable = withProps(({editable}) => {
	return {
		selectable : classNames("text-edit",{editable}),
		textSelectable : editable ? "Guardar" : "Editar" 
	}
});

export default editable(EditableButtonChange);
