import { IRouter } from '../interface/IRouter';
import SettingLayout from '../layouts/SettingLayout';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Password from '../pages/settings/password/Pasword';
import Profile from '../pages/settings/profile/Profile';

const routes: IRouter[] = [
  { id: 1, path: '/', component: Home },
  { id: 2, path: '/login', component: Login },
  { id: 3, path: '/settings/profile', component: Profile, layout: SettingLayout },
  { id: 3, path: '/settings/password', component: Password, layout: SettingLayout },
];

export { routes };
