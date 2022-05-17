import './App.css';
import  RouteList  from './RouteList.jsx';
import {QueryClientProvider, QueryClient} from 'react-query';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <header className='App-header'>
        <h1>MetroTransit Route Information</h1>
      </header>
      <div className='App'>
        <RouteList  />
      </div>
    </QueryClientProvider>
  );
}

export default App;
