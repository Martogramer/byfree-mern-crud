import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { HomePage, LoginPage, RegisterPage, AccountPage, ProjectsPage, ProjectPage, UserPage } from '../pages'
export default function AppRouter(){
    return(
        <Router>
            <Navigation />
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/login" component={LoginPage}/>
                <Route exact path="/register" component={RegisterPage}/>
                <Route exact path="/account" component={AccountPage}/>
                <Route exact path="/projects" component={ProjectsPage}/>
                <Route exact path="/project/:projectId" component={ProjectPage}/>
                <Route exact path="/admin/users" component={UserPage}/>

                <Route path="*" component={NotFoundPage} />
            </Switch>
        </Router>
    )
}