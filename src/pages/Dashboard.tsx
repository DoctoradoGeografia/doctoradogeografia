import { useState } from 'react';
import NoticiasSection from '../components/Dashboard/NoticiasSection';
import CursosSection from '../components/Dashboard/CursosSection';

type TabType = 'noticias' | 'cursos';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<TabType>('noticias');

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text mb-2">Panel de Administración</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Gestiona noticias y cursos del Doctorado en Geografía
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8 border-b border-gray-200 dark:border-gray-700">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('noticias')}
              className={`${
                activeTab === 'noticias'
                  ? 'border-blue-9 dark:border-purple-9 text-blue-9 dark:text-purple-9'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
            >
              📰 Noticias
            </button>
            <button
              onClick={() => setActiveTab('cursos')}
              className={`${
                activeTab === 'cursos'
                  ? 'border-blue-9 dark:border-purple-9 text-blue-9 dark:text-purple-9'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
            >
              📚 Cursos
            </button>
          </nav>
        </div>

        {/* Content - Solo renderiza el componente de la pestaña activa */}
        {activeTab === 'noticias' ? <NoticiasSection /> : <CursosSection />}
      </div>
    </div>
  );
};

export default Dashboard;
