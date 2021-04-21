import React, { memo , useContext } from "react";
import "./index.scss";
import GlobalTitle from "../../../common/GlobalTitle";
import GlobalDiv from "../../../common/GlobalDiv";
import style from "../../../../styles/index.scss";
import { useMediaQuery } from "react-responsive";
import { IoIosArrowRoundBack } from "react-icons/io";
import { TabsEditorContext } from "../TabsEditorContext";

const PanelEditorDescriptive = ({ title, message, children }) => {
	const { onToggle } = useContext(TabsEditorContext);
	const isTablet = useMediaQuery({ query: `(max-width:${style.mediaTabletMedium})` });

	return (
		<div className="editor-panel-card">
			<div className="row-panel">
				{isTablet && <IoIosArrowRoundBack size={40} onClick={onToggle} />}
				<GlobalDiv paddingBottom="1em">
					{title && (
						<span className='global-title-responsive'>
							<GlobalTitle
								text={title}
								textAlign="left"
								paddingVertical="0"
								fontSize=".8em"
								autoWidth
								align="flex-start"
							/>
						</span>
					)}
				</GlobalDiv>
			</div>
			<div className="row-panel">
				{message && <p className="row-panel message">{message}</p>}
			</div>
			<div className="row-panel">{children}</div>
		</div>
	);
};

export default memo(PanelEditorDescriptive);
