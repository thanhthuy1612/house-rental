import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import App from './App.tsx';
import './index.css';
import StoreProvider from './StoreProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StoreProvider>
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemSelectedBg: '#004aad',
            itemSelectedColor: '#ffffff',
          }
        },
        token: {
          // Seed Token
          colorPrimary: '#004aad',
          colorBorderBg: '#004aad',
          colorIcon: '#004aad',
          colorTextBase: '#004aad',
          colorError: '#FF6961',
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StoreProvider>,
);
