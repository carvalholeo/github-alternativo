import { Switch, Route } from 'react-router-dom';

import Error404 from './pages/Errors/Error404';
import Disabled from './pages/Errors/Disabled';
import Index from './pages/Index';
import UserSeacrh from './pages/UserSearch';
import Profile from './pages/Profile';
import Details from './pages/Details';
import Notifications from './pages/Notifications';
import Gists from './pages/Gists';
import Emails from './pages/Emails';

function Routes() {
  return (
    <div className="container-lg">
      <Switch>
        <Route path='/' exact component={Index} />
        <Route path='/search' component={UserSeacrh} />
        <Route path='/notifications' component={Notifications} />
        <Route path='/profile/:user' component={Details} />
        <Route path='/profile' component={Profile} />
        <Route path='/contact' component={Disabled} />
        <Route path='/gists' component={Gists} />
        <Route path='/emails' component={Emails} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default Routes;
