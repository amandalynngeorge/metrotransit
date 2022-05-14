import './App.css';
import  RouteList  from './RouteList.jsx';
import DirectionList from './DirectionList ';
import {QueryClientProvider, QueryClient} from 'react-query';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Departures</h1>
      <RouteList />
    </QueryClientProvider>
  );
}

export default App;
