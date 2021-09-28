import React, { Component } from 'react';
import { Route, Switch , Redirect , withRouter} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Data from './containers/Data/Data';

class App extends Component {



  render() {

    let route = (
      <Switch>
      <Route path="/" exact  component={Data} />
      <Redirect to='/' />
      </Switch>
    );

    return (
      <div>
          <Layout>
               {route}
         </Layout>
      </div>
    );
  }
}


export default App;
