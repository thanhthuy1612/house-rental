import { IRouter } from '../interface/IRouter';
import SettingLayout from '../layouts/SettingLayout';
import CreateHome from '../pages/createHome/CreateHome';
import Home from '../pages/home/Home';
import Introduce from '../pages/introduce/Introduce';
import Login from '../pages/login/Login';
import MyRoom from '../pages/myRoom/MyRoom';
import Product from '../pages/product/Product';
import Password from '../pages/settings/password/Pasword';
import Profile from '../pages/settings/profile/Profile';

const routes: IRouter[] = [
  { id: 1, path: '/', component: Home },
  { id: 2, path: '/login', component: Login },
  { id: 3, path: '/settings/profile', component: Profile, layout: SettingLayout },
  { id: 4, path: '/settings/password', component: Password, layout: SettingLayout },
  { id: 5, path: '/product/:id', component: Product },
  { id: 6, path: '/myRoom', component: MyRoom },
  { id: 7, path: '/create', component: CreateHome },
  { id: 8, path: '/introduce', component: Introduce },
];

export { routes };
