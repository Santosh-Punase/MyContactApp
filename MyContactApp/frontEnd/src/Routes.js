import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Editpage from './editPage'
import AddnewPage from './addNew'
import ContactlistPage from'./ContactListPage'

class Routes extends React.Component {
    render() {
        return (
            <Router >
                <Switch>
                    <Route exact path='/' component={ContactlistPage} />
                    <Route exact path='/contact/add' component={AddnewPage} />
                    <Route path='/contact/:_id' component={Editpage} />
                    <Route render = { function() {
                        return <h1>Not Found</h1>
                    }} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;