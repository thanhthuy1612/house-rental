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
            itemSelectedBg: '#80e823',
            itemSelectedColor: '#ffffff',
            colorPrimary: '#80e823',
          },
          Button: {
            colorPrimaryActive: '#80e823',
          },
          Select: {
            colorPrimary: '#80e823',
            optionSelectedBg: '#004aad',
            optionSelectedColor: '#ffffff',
          },
          Input: {
            colorPrimary: '#80e823',
          },
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
