import { Button } from 'flowbite-react';
import MainLayout from './layout/MainLayout';

const App = () => {
  return (
    <MainLayout>
      <div>
        <h1 className="text-2xl font-bold mb-4">Welcome to the App</h1>
        <Button>Click me</Button>
      </div>
    </MainLayout>
  );
};

export default App;