import React from "react";
import Router from "./router";
import moment from "moment";
import "moment/locale/es";

//Providers
import { ShoppingCartProvider } from "./context/ShoppingCart";
import { AuthProvider } from "./context/Auth";
import { UIProvider } from "./context/UI";
import { ErrorMessageProvider } from "context/ErrorMessage/provider";

//Redux
import { Provider } from "react-redux";
import store from "redux/store";
import CommonErrorBoundary from "components/common/ErrorBoundaries/CommonErrorBoundary";

//Moment Configuration
moment().locale("es");

const App = () => {
	return (
		<CommonErrorBoundary>
			<Provider store={store}>
				<ErrorMessageProvider>
					<UIProvider>
						<ShoppingCartProvider>
							<AuthProvider>
								<Router />
							</AuthProvider>
						</ShoppingCartProvider>
					</UIProvider>
				</ErrorMessageProvider>
			</Provider>
		</CommonErrorBoundary>
	);
};

export default App;
