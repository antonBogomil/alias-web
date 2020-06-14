import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import TeamsPage from "./routes/teams/Teams";
import {ThemeProvider} from '@material-ui/core/styles';
import theme from "./config/theme";
import Header from "./components/Header";
import CssBaseline from '@material-ui/core/CssBaseline';
import {Provider} from "mobx-react";
import Store from "./store";
import Play from "./routes/play";
import Ready from './routes/ready'
import TablePage from './routes/table'

const store = new Store();

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<CssBaseline/>
				<BrowserRouter>
					<Header/>
					<Switch>
						<Route path='/' exact component={TeamsPage}/>
						<Route path='/teams' exact component={TeamsPage}/>
						<Route path='/table' exact component={TablePage}/>
						<Route path='/ready' exact component={Ready}/>
						<Route path='/play' exact component={Play}/>
						<Route path='/team-result' exact component={() => (<div>You round result</div>)}/>
					</Switch>
				</BrowserRouter>
			</Provider>
		</ThemeProvider>
	);
}

export default App;
