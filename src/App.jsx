import MainPage from './pages/MainPage/MainPage';

import './global/styles.scss';

import { Header, Footer } from './components/index';

function App() {
  return (
    <>
      {/* <div className="app"> */}
      <Header />
      <MainPage />

      {/* <Footer /> */}
      {/* </div> */}
    </>
  );
}

export default App;
