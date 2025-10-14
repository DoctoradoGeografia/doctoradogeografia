import { useState } from 'react';
import type { Curso } from '../../hooks/useCurso';
import { addDoc, collection, updateDoc, deleteDoc, doc, Timestamp } from 'firebase/firestore';
import db from '../../firebase/firebase';
import { useCursos } from '../../hooks/useCurso';

const CursosSection = () => {
  const { cursos, loading: loadingCursos } = useCursos();
  const [isLoading, setIsLoading] = useState(false);
  const [editingCursoId, setEditingCursoId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Curso>>({
    titulo: '',
    subtitulo: '',
    categoria: '',
    cuerpo: '',
    imagen: '',
    inscriptos: 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const cursoData = {
        ...formData,
        fecha: Timestamp.now(),
      };

      if (editingCursoId) {
        await updateDoc(doc(db, 'cursos', editingCursoId), cursoData);
        alert('✅ Curso actualizado correctamente');
        setEditingCursoId(null);
      } else {
        await addDoc(collection(db, 'cursos'), cursoData);
        alert('✅ Curso creado correctamente');
      }

      // Resetear formulario
      setFormData({
        titulo: '',
        subtitulo: '',
        categoria: '',
        cuerpo: '',
        imagen: '',
        inscriptos: 0,
      });
    } catch (error) {
      console.error('Error al guardar curso:', error);
      alert('❌ Error al guardar el curso');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (curso: Curso) => {
    setFormData(curso);
    setEditingCursoId(curso.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('¿Estás seguro de eliminar este curso?')) {
      try {
        await deleteDoc(doc(db, 'cursos', id));
        alert('✅ Curso eliminado correctamente');
      } catch (error) {
        console.error('Error al eliminar curso:', error);
        alert('❌ Error al eliminar el curso');
      }
    }
  };

  const handleCancel = () => {
    setFormData({
      titulo: '',
      subtitulo: '',
      categoria: '',
      cuerpo: '',
      imagen: '',
      inscriptos: 0,
    });
    setEditingCursoId(null);
  };

  if (loadingCursos) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-9 dark:border-purple-9"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Formulario */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-text mb-6">
          {editingCursoId ? '✏️ Editar Curso' : '➕ Nuevo Curso'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Título *
              </label>
              <input
                type="text"
                required
                value={formData.titulo || ''}
                onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-9 dark:focus:ring-purple-9 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Título del curso"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Subtítulo *
              </label>
              <input
                type="text"
                required
                value={formData.subtitulo || ''}
                onChange={(e) => setFormData({ ...formData, subtitulo: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-9 dark:focus:ring-purple-9 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Subtítulo"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Categoría *
              </label>
              <select
                required
                value={formData.categoria || ''}
                onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-9 dark:focus:ring-purple-9 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="">Seleccionar categoría</option>
                <option value="Doctorado">Doctorado</option>
                <option value="Maestría">Maestría</option>
                <option value="Especialización">Especialización</option>
                <option value="Curso">Curso</option>
                <option value="Taller">Taller</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Inscriptos
              </label>
              <input
                type="number"
                min="0"
                value={formData.inscriptos || 0}
                onChange={(e) => setFormData({ ...formData, inscriptos: parseInt(e.target.value) || 0 })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-9 dark:focus:ring-purple-9 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="0"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Descripción *
            </label>
            <textarea
              required
              rows={6}
              value={formData.cuerpo || ''}
              onChange={(e) => setFormData({ ...formData, cuerpo: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-9 dark:focus:ring-purple-9 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Descripción del curso..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              URL Imagen *
            </label>
            <input
              type="url"
              required
              value={formData.imagen || ''}
              onChange={(e) => setFormData({ ...formData, imagen: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-9 dark:focus:ring-purple-9 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="https://..."
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-blue-9 dark:bg-purple-9 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-10 dark:hover:bg-purple-10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Guardando...' : editingCursoId ? 'Actualizar Curso' : 'Crear Curso'}
            </button>
            {editingCursoId && (
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Cancelar
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Tabla */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-text">
            Cursos Existentes ({cursos.length})
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Imagen
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Título
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Categoría
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Inscriptos
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {cursos.map((curso) => (
                <tr key={curso.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={curso.imagen}
                      alt={curso.titulo}
                      className="h-12 w-12 rounded object-cover"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {curso.titulo}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-xs">
                      {curso.subtitulo}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 dark:bg-purple-100 text-blue-800 dark:text-purple-800">
                      {curso.categoria}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {curso.inscriptos}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleEdit(curso)}
                      className="text-blue-9 dark:text-purple-9 hover:text-blue-10 dark:hover:text-purple-10 mr-4"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(curso.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CursosSection;
