import React from 'react';
import { IRouter } from './interface/IRouter';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import ErrorExist from './components/error/ErrorExist';
import { routes } from './routes/routes';
import RoutesAuthorized from './routes/RoutesAuthorized';
import Notification from './components/notification/Notification';
import './App.css';

const App: React.FC = () => {
  return (
    <Notification>
      <Router>
        <Routes>
          {routes.map((route: IRouter) => {
            const Layout = route.layout || DefaultLayout;
            const Page = route.component;
            return (
              <Route
                key={route.id}
                path={route.path}
                element={
                  <RoutesAuthorized
                    isPrivate={Boolean(route?.isPrivate)}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                }
              />
            );
          })}
          <Route
            path="*"
            element={
              <DefaultLayout>
                <ErrorExist />
              </DefaultLayout>
            }
          />
        </Routes>
      </Router>
    </Notification>
  );
};

export default App;
