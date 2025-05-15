
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Toaster } from './components/ui/toaster'

// Add favicon link
const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.href = '/lovable-uploads/52297381-6b11-47c0-b047-d1d55ec3418f.png';
document.head.appendChild(favicon);

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Toaster />
  </>
);
