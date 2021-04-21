import React from 'react';
import NoResults from "./NoResults";
import Initial from "./Initial";
import { IPropsNoResults } from '../../../interfaces';

const EmptyMessage = {
	NoResults : (props : IPropsNoResults) => <NoResults {...props} />,
	Initial : () => <Initial />
}

export default EmptyMessage