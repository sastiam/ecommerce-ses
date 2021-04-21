import { compose } from 'redux'

const developmentMode = process.env.NODE_ENV === "development";

let enhanceMiddleware = compose;
if( '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' in window) {
	enhanceMiddleware = developmentMode ?  (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({
		trace : true,
	})  || compose ) : compose;
}

export default enhanceMiddleware;