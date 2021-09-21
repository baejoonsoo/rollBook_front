import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import MainScreen from './mainScreen/MainScreen';
import AddSchedule from './admin/addList/AddSchedule';
import EmptyPage from './emptyPage/EmptyPage';
import ShowSchedule from './showDoList/ShowSchedule';
import RollCall from './attendanceCheck/RollCall';
import UserHeader from './header/UserHeader';
import AdminHeader from './header/AdminHeader';
import Login from './Login/Login';
import Grades from './admin/showAttendanceStatus/Grades';
import AllGrades from './admin/showAttendanceStatus/AllGrades';
import './index.css';
import Signup from './Signup/Signup';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/user" />

        <Route path="/user">
          <UserHeader />

          <Switch>
            <Route exact path="/user/" component={MainScreen} />
            <Route exact path="/user/login">
              <Login target="user" />
            </Route>
            <Route exact path="/user/showList" component={ShowSchedule} />
            <Route exact path="/user/rollCall" component={RollCall} />
            <Route exact path="/user/signup" component={Signup} />
            <Route path="*" component={EmptyPage} />
          </Switch>
        </Route>

        <Route path="/admin">
          <AdminHeader />
          <Switch>
            <Route exact path="/admin/" component={MainScreen} />

            <Route exact path="/admin/rollShow" component={AllGrades} />
            <Route exact path="/admin/rollShow:grade" component={Grades} />
            <Route exact path="/admin/addList" component={AddSchedule} />
            <Route exact path="/admin/showList" component={ShowSchedule} />
            <Route exact path="/admin/login">
              <Login target="admin" />
            </Route>
            <Route path="*" component={EmptyPage} />
          </Switch>
        </Route>

        <Route path="*">
          <UserHeader />
          <EmptyPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
