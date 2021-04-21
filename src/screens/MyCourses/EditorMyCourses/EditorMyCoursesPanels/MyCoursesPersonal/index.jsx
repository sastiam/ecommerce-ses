import React from 'react'
import { useShowByTypeUserLogged } from 'components/pages/User/ShowByTypeUserLogged';
import PanelEditorDescriptive from "../../../../../components/layouts/PanelTabsMainEditor/PanelEditorDescriptive";
import CoursesPersonalFilterPreview from './CoursesPersonalFilterPreview';
import CoursesPersonalTeachingPreview from './CoursesPersonalTeachingPreview';
import CommonErrorBoundary from 'components/common/ErrorBoundaries/CommonErrorBoundary';

const MyCoursesPersonal = () => {
	const { student, mentor } = useShowByTypeUserLogged();
	const title = "Mis cursos";
	const message = "Todos tus cursos aparecerán en esta sección";

	return (
		<PanelEditorDescriptive title={title} message={message}>
			<CommonErrorBoundary>
				{student && <CoursesPersonalFilterPreview />}
				{mentor && <CoursesPersonalTeachingPreview />}
			</CommonErrorBoundary>
		</PanelEditorDescriptive>
	)
}

export default MyCoursesPersonal
