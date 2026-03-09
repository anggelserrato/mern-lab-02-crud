import { AlertCircle } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Toaster } from '@/components/ui/sonner';
import TaskForm from '@/components/tasks/TaskForm';
import TaskTable from './components/tasks/TaskTable';

export default function App() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Task Manager</h1>

      <Alert variant="destructive" className="mb-6">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          ⚠️ Los datos no persisten al recargar la página
        </AlertDescription>
      </Alert>

      <TaskForm />
      <TaskTable />
      <Toaster position="top-center" richColors />
    </div>
  );
}
