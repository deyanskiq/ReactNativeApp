import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
//react-navigation
import Welcome from './components/Welcome';
import AlbumList from './components/AlbumList';

const RouterComponent = () => {
  return (
    <Router>
     <Scene key="root" hideNavBar>
        <Scene key="welcome">
          <Scene
           key="login"
           component={Welcome}
           rightTitle="Show albums"
           onRight={() => { Actions.albumList(); }}
          />
          <Scene
          key="albumList"
          component={AlbumList}
          title="Albums"
          initial
          />
          </Scene>
          {/* <Scene
          key="scoreCabinet"
          component={ ScoreCabinet }
          title="Create Employee"
          />
        <Scene
          key="EvaluationReason"
          component={  }
          title="Edit Employee"
        />
        <Scene
          key="contactForm"
          component={ EmployeeEdit }
          title="Edit Employee"
        />
        <Scene
          key="finalScreen"
          component={ EmployeeEdit }
          title="Edit Employee"
        /> */}
    </Scene>
    </Router>
  );
};

export default RouterComponent;
