import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import ErrorAuthorized from '../components/error/ErrorAuthorized';


export interface IRoutesAuthorizedProps {
  element: JSX.Element;
  isPrivate: boolean;
}

const RoutesAuthorized: React.FC<IRoutesAuthorizedProps> = ({ element, isPrivate }) => {
  const accessToken = localStorage.getItem('token');
  return !accessToken && isPrivate ? (
    <DefaultLayout><ErrorAuthorized /></DefaultLayout>
  ) : (
    element
  );
};

export default RoutesAuthorized;