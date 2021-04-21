import React from "react";
import PanelEditorDescriptive from "components/layouts/PanelTabsMainEditor/PanelEditorDescriptive";
import RowPayment from "../RowPayment";

const ContainerPayments = ({ data }) => (
	<PanelEditorDescriptive title="Mis pagos">
		{data.map((item, i) => <RowPayment key={i}	{...item} />)}
	</PanelEditorDescriptive>
);


export default ContainerPayments;
