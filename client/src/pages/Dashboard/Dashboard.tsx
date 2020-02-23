import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import { DashboardWrapper, DashboardBody } from './Dashboard.style';

import AuthRoute from 'components/AuthRoute';
import AddBug from 'components/AddBug/AddBug';
import Navbar from 'components/Navbar/Navbar';
import NotFound from 'components/NotFound';
import Sidebar from 'components/Sidebar/Sidebar';

import Bugs from 'pages/Bugs/Bugs';
import Profile from 'pages/Profile/Profile';
import Profiles from 'pages/Profiles/Profiles';
import SingleBug from 'pages/SingleBug/SingleBug';
import Notifications from 'pages/Notifications/Notifications';

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    document.addEventListener('click', (e: any) => {
      if (e.target.closest('a')) {
        setIsSidebarOpen(false);
      }
    });
  }, []);

  return (
    <DashboardWrapper>
      <Navbar handleSidebar={handleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      <DashboardBody>
        <Switch>
          <AuthRoute exact path="/dashboard/bugs" component={Bugs} />
          <AuthRoute exact path="/dashboard/new-bug" component={AddBug} />
          <AuthRoute
            exact
            path="/dashboard/bugs/:bugId"
            component={SingleBug}
          />
          <AuthRoute exact path="/profiles" component={Profiles} />
          <AuthRoute exact path="/profiles/:username" component={Profile} />
          <AuthRoute
            exact
            path="/dashboard/notifications"
            component={Notifications}
          />
          <Route path="/" component={NotFound} />
        </Switch>
      </DashboardBody>
    </DashboardWrapper>
  );
};

export default Dashboard;
