import '@ant-design/v5-patch-for-react-19';
import '@gengjian1203/fe-core-components/styles.css';
import './styles/normalize.css';

import { RouterProvider } from 'react-router';

import router from './routes';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
