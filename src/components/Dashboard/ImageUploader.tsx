import { useState, useRef } from 'react';
import { uploadImage } from '../../services/ImageUploadService';

interface ImageUploaderProps {
  onImageUploaded?: (url: string) => void;
}

const ImageUploader = ({ onImageUploaded }: ImageUploaderProps) => {
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [preview, setPreview] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validar tipo de archivo
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setError('Solo se permiten imágenes (JPG, PNG, GIF, WEBP)');
      return;
    }

    // Validar tamaño (máximo 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      setError('La imagen no debe superar los 5MB');
      return;
    }

    setError('');
    setUploadedUrl('');
    setCopied(false);

    // Crear preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Subir imagen
    setUploading(true);
    const result = await uploadImage(file);
    setUploading(false);

    if (result.success && result.url) {
      setUploadedUrl(result.url);
      if (onImageUploaded) {
        onImageUploaded(result.url);
      }
    } else {
      setError(result.error || 'Error al subir la imagen');
      setPreview('');
    }
  };

  const handleCopyUrl = () => {
    if (uploadedUrl) {
      navigator.clipboard.writeText(uploadedUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setUploadedUrl('');
    setPreview('');
    setError('');
    setCopied(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-blue-1 dark:bg-purple-1 rounded-full flex items-center justify-center">
          <svg 
            className="w-5 h-5 text-blue-9 dark:text-purple-9" 
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
        </div>
        <div>
          <h3 className="text-lg font-bold text-text dark:text-white">
            Subir Imagen
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Sube una imagen y obtén su enlace directo
          </p>
        </div>
      </div>

      {/* Upload Area */}
      {!uploadedUrl && !preview && (
        <div className="text-center">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
            onChange={handleFileSelect}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className={`cursor-pointer inline-flex flex-col items-center gap-2 px-6 py-4 rounded-lg transition-colors ${
              uploading
                ? 'bg-gray-100 dark:bg-gray-700 cursor-not-allowed'
                : 'bg-blue-1 dark:bg-purple-1 hover:bg-blue-2 dark:hover:bg-purple-2'
            }`}
          >
            {uploading ? (
              <>
                <svg 
                  className="animate-spin h-8 w-8 text-blue-9 dark:text-purple-9" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24"
                >
                  <circle 
                    className="opacity-25" 
                    cx="12" 
                    cy="12" 
                    r="10" 
                    stroke="currentColor" 
                    strokeWidth="4"
                  />
                  <path 
                    className="opacity-75" 
                    fill="currentColor" 
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span className="text-sm font-medium text-blue-9 dark:text-purple-9">
                  Subiendo imagen...
                </span>
              </>
            ) : (
              <>
                <svg 
                  className="w-12 h-12 text-blue-9 dark:text-purple-9" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
                  />
                </svg>
                <span className="text-sm font-medium text-blue-9 dark:text-purple-9">
                  Seleccionar imagen
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  JPG, PNG, GIF, WEBP (máx. 5MB)
                </span>
              </>
            )}
          </label>
        </div>
      )}

      {/* Preview */}
      {preview && !uploadedUrl && (
        <div className="text-center">
          <img 
            src={preview} 
            alt="Preview" 
            className="max-h-48 mx-auto rounded-lg mb-4 border-2 border-gray-200 dark:border-gray-600"
          />
          <div className="flex items-center justify-center gap-2 text-blue-9 dark:text-purple-9">
            <svg 
              className="animate-spin h-5 w-5" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span className="text-sm font-medium">Procesando imagen...</span>
          </div>
        </div>
      )}

      {/* Success - URL Display */}
      {uploadedUrl && (
        <div className="space-y-4">
          <div className="text-center">
            <img 
              src={uploadedUrl} 
              alt="Uploaded" 
              className="max-h-48 mx-auto rounded-lg border-2 border-green-500"
            />
          </div>

          {/* URL Box */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
              URL de la imagen:
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={uploadedUrl}
                readOnly
                className="flex-1 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-mono text-gray-700 dark:text-gray-300"
              />
              <button
                onClick={handleCopyUrl}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  copied
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-9 dark:bg-purple-9 text-white hover:bg-blue-10 dark:hover:bg-purple-10'
                }`}
              >
                {copied ? (
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path 
                        fillRule="evenodd" 
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    Copiado
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" 
                      />
                    </svg>
                    Copiar
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <button
              onClick={handleReset}
              className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Subir otra imagen
            </button>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-2">
          <svg 
            className="w-5 h-5 text-red-500 flex-shrink-0" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path 
              fillRule="evenodd" 
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293z" 
              clipRule="evenodd" 
            />
          </svg>
          <span className="text-sm text-red-700 dark:text-red-400">
            {error}
          </span>
        </div>
      )}

      {/* Info */}
      <div className="mt-4 p-3 bg-blue-50 dark:bg-purple-900/20 border border-blue-200 dark:border-purple-800 rounded-lg">
        <div className="flex gap-2">
          <svg 
            className="w-5 h-5 text-blue-9 dark:text-purple-9 flex-shrink-0 mt-0.5" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path 
              fillRule="evenodd" 
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" 
              clipRule="evenodd" 
            />
          </svg>
          <div className="text-xs text-blue-900 dark:text-purple-300 space-y-1">
            <p className="font-medium">💡 Consejos:</p>
            <ul className="list-disc list-inside space-y-0.5 ml-2">
              <li>Usa imágenes optimizadas para web</li>
              <li>Formatos recomendados: JPG para fotos, PNG para gráficos</li>
              <li>La URL generada es permanente y pública</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;