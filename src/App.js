import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import GetMovies from './GetMovies/GetMovies';

function App() {

  const queryClient = new QueryClient()

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <GetMovies />
      </QueryClientProvider>
      
    </div>
  );
}

export default App;
