import { useState, useEffect } from 'react';
import type { Noticia } from '../../hooks/useNoticias';
import { useAuth } from '../../context/AuthContext';
import { addDoc, collection, updateDoc, deleteDoc, doc, Timestamp } from 'firebase/firestore';
import db from '../../firebase/firebase';
import { useNoticias } from '../../hooks/useNoticias';
import ImageUploader from './ImageUploader';
import Input from '../UI/input';

const NoticiasSection = () => {
  const { user } = useAuth();
  const { noticias, loading: loadingNoticias, formatFirebaseDate } = useNoticias();
  const [isLoading, setIsLoading] = useState(false);
  const [editingNoticiaId, setEditingNoticiaId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Noticia>>({
    titulo: '',
    subtitulo: '',
    autor: user?.displayName || '',
    posicionautor: '',
    categoria: '',
    cuerpo: '',
    conlusion: '',
    frasedestacada: '',
    imagencentral: '',
    imagensecundaria: '',
    imagenautor: user?.photoURL || '',
  });
  
  //Para Upload Image
  //const [saving, setSaving] = useState(false);
  const [showImageUploader, setShowImageUploader] = useState(false);

  // Actualizar autor cuando el usuario carga
  useEffect(() => {
    if (user && !formData.autor) {
      setFormData((prev) => ({
        ...prev,
        autor: user.displayName || '',
        imagenautor: user.photoURL || '',
      }));
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const noticiaData = {
        ...formData,
        fecha: Timestamp.now(),
      };

      if (editingNoticiaId) {
        await updateDoc(doc(db, 'noticias', editingNoticiaId), noticiaData);
        alert('✅ Noticia actualizada correctamente');
        setEditingNoticiaId(null);
      } else {
        await addDoc(collection(db, 'noticias'), noticiaData);
        alert('✅ Noticia creada correctamente');
      }

      // Resetear formulario
      setFormData({
        titulo: '',
        subtitulo: '',
        autor: user?.displayName || '',
        posicionautor: '',
        categoria: '',
        cuerpo: '',
        conlusion: '',
        frasedestacada: '',
        imagencentral: '',
        imagensecundaria: '',
        imagenautor: user?.photoURL || '',
      });
    } catch (error) {
      console.error('Error al guardar noticia:', error);
      alert('❌ Error al guardar la noticia');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (noticia: Noticia) => {
    setFormData(noticia);
    setEditingNoticiaId(noticia.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('¿Estás seguro de eliminar esta noticia?')) {
      try {
        await deleteDoc(doc(db, 'noticias', id));
        alert('✅ Noticia eliminada correctamente');
      } catch (error) {
        console.error('Error al eliminar noticia:', error);
        alert('❌ Error al eliminar la noticia');
      }
    }
  };

  const handleCancel = () => {
    setFormData({
      titulo: '',
      subtitulo: '',
      autor: user?.displayName || '',
      posicionautor: '',
      categoria: '',
      cuerpo: '',
      conlusion: '',
      frasedestacada: '',
      imagencentral: '',
      imagensecundaria: '',
      imagenautor: user?.photoURL || '',
    });
    setEditingNoticiaId(null);
  };

  if (loadingNoticias) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-9 dark:border-purple-9"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">

        {/* Image Uploader Toggle */}
      <div className="flex justify-end">
        <button
          onClick={() => setShowImageUploader(!showImageUploader)}
          className="px-4 py-2 bg-blue-9 dark:bg-purple-9 text-white rounded-lg font-medium hover:bg-blue-10 dark:hover:bg-purple-10 transition-colors flex items-center gap-2"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
            />
          </svg>
          {showImageUploader ? 'Ocultar subida de imágenes' : 'Subir imágenes'}
        </button>
      </div>

      {/* Image Uploader Component */}
      {showImageUploader && (
        <div className="animate-slide-in-right">
          <ImageUploader />
        </div>
      )}

      {/* Formulario */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-text mb-6">
          {editingNoticiaId ? '✏️ Editar Noticia' : '➕ Nueva Noticia'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
                label="Título"
                name="titulo"
                value={formData.titulo || ''}
                onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
                placeholder="Título de la noticia"
                required
                />
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
                Autor *
              </label>
              <input
                type="text"
                required
                value={formData.autor || ''}
                onChange={(e) => setFormData({ ...formData, autor: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-9 dark:focus:ring-purple-9 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Nombre del autor"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Posición del Autor
              </label>
              <input
                type="text"
                value={formData.posicionautor || ''}
                onChange={(e) => setFormData({ ...formData, posicionautor: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-9 dark:focus:ring-purple-9 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Ej: Doctorado en Geografía"
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
                <option value="Noticia">Noticia</option>
                <option value="Evento">Evento</option>
                <option value="Investigación">Investigación</option>
                <option value="Anuncio">Anuncio</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Frase Destacada
              </label>
              <input
                type="text"
                value={formData.frasedestacada || ''}
                onChange={(e) => setFormData({ ...formData, frasedestacada: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-9 dark:focus:ring-purple-9 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Frase destacada"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Cuerpo *
            </label>
            <textarea
              required
              rows={6}
              value={formData.cuerpo || ''}
              onChange={(e) => setFormData({ ...formData, cuerpo: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-9 dark:focus:ring-purple-9 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Contenido principal de la noticia..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Conclusión
            </label>
            <textarea
              rows={3}
              value={formData.conlusion || ''}
              onChange={(e) => setFormData({ ...formData, conlusion: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-9 dark:focus:ring-purple-9 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Conclusión de la noticia..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                URL Imagen Central *
              </label>
              <input
                type="url"
                required
                value={formData.imagencentral || ''}
                onChange={(e) => setFormData({ ...formData, imagencentral: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-9 dark:focus:ring-purple-9 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="https://..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                URL Imagen Secundaria
              </label>
              <input
                type="url"
                value={formData.imagensecundaria || ''}
                onChange={(e) => setFormData({ ...formData, imagensecundaria: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-9 dark:focus:ring-purple-9 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="https://..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                URL Imagen Autor
              </label>
              <input
                type="url"
                value={formData.imagenautor || ''}
                onChange={(e) => setFormData({ ...formData, imagenautor: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-9 dark:focus:ring-purple-9 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="https://..."
              />
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-blue-9 dark:bg-purple-9 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-10 dark:hover:bg-purple-10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Guardando...' : editingNoticiaId ? 'Actualizar Noticia' : 'Crear Noticia'}
            </button>
            {editingNoticiaId && (
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
            Noticias Existentes ({noticias.length})
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
                  Fecha
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {noticias.map((noticia) => (
                <tr key={noticia.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={noticia.imagencentral}
                      alt={noticia.titulo}
                      className="h-12 w-12 rounded object-cover"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {noticia.titulo}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {noticia.autor}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 dark:bg-purple-100 text-blue-800 dark:text-purple-800">
                      {noticia.categoria}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {formatFirebaseDate(noticia.fecha)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleEdit(noticia)}
                      className="text-blue-9 dark:text-purple-9 hover:text-blue-10 dark:hover:text-purple-10 mr-4"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(noticia.id)}
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

export default NoticiasSection;
