import React from 'react';
import * as Styled from './styles';

import Modal from 'components/layouts/Modal';
import ModalTemplate from '../../Helpers/ModalTemplate';
import QualificationsTemplate from '../../Helpers/QualificationsTemplate';

const QualificationsModal = () => (
	<Modal.Portals>
		<ModalTemplate>
			<Styled.Container>
				<QualificationsTemplate />
			</Styled.Container>
		</ModalTemplate>
	</Modal.Portals>
);

export default QualificationsModal;