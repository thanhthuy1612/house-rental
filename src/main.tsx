import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import Notification from './components/notification/Notification.tsx';
import App from './App.tsx';
import './index.css';
import StoreProvider from './StoreProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StoreProvider>
    <ConfigProvider
      theme={{
        components: {},
        token: {
          // Seed Token
          colorPrimary: '#0E2954',
          colorBorderBg: '#0E2954',
          colorIcon: '#0E2954',
          colorTextBase: '#0E2954',
          colorError: '#FF6961',
        },
      }}
    >
      <Notification>
        <App />
      </Notification>
    </ConfigProvider>
  </StoreProvider>,
);
