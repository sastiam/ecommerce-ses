import React from 'react';
import * as Styled from './styles';

import Header from './components/Header';
import Footer from './components/Footer';

import Modal from 'components/layouts/Modal';
import ModalTemplate from '../../Helpers/ModalTemplate';
import QualificationsTemplate from '../../Helpers/QualificationsTemplate';
import ListQuestion from './components/ListQuestion';
import useExamInit from './hooks/useExamInit';
import useResponsive from 'hooks/useResponsive';
import PreviewContent from './components/PreviewContent';

const ExamModal = () => {
	const { course , questions , examPercentage , isLoadingQuestions , isExamStart } = useExamInit();
	const { responsive } = useResponsive(1080);

	return <Modal.Portals>
		<ModalTemplate>
			<Styled.MainContainer>
				{
					!isLoadingQuestions && (
						<>
							<Styled.Container>
								<Styled.ExamContent>
									<Header courseName={course.title} />
									{ isExamStart ? <ListQuestion questions={questions} /> : <PreviewContent /> }
								</Styled.ExamContent>
								{
									!responsive && (
										<Styled.QualificationsContent>
											<QualificationsTemplate />
										</Styled.QualificationsContent>
									)
								}
							</Styled.Container>
							<Footer examPercentage={examPercentage} />
						</>
					)
				}
			</Styled.MainContainer>
		</ModalTemplate>
	</Modal.Portals>
};

export default ExamModal;