import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import Benefits from './Benefits';
import Biodiversity from './Biodiversity';
import Dashboard from './Dashboard';
import Governance from './Governance';
import Landing from './Landing';
import "./App.css"

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{primaryColor: 'orange', primaryShade: 8}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}>
            <Route index element={<About />} />
            <Route path='/biodiversity' element={<Biodiversity />} />
            <Route path='/governance' element={<Governance />} />
            <Route path='/benefits' element={<Benefits />} />
            <Route path='/map' element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
