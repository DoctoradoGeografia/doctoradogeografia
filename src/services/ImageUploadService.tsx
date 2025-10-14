const API_KEY = import.meta.env.VITE_IMGHIPPO_API_KEY ;
const UPLOAD_URL = import.meta.env.VITE_UPLOAD_URL ;

interface UploadResponse {
  success: boolean;
  status: number;
  message: string;
  data: {
    title: string;
    url: string;
    view_url: string;
    extension: string;
    size: number;
    created_at: string;
  };
}
  

export const uploadImage = async (file: File): Promise<{ success: boolean; url?: string; error?: string }> => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('api_key', API_KEY);

    const response = await fetch(UPLOAD_URL, {
      method: 'POST',
      body: formData,
    });

    const result: UploadResponse = await response.json();

    if (result.success) {
      return {
        success: true,
        url: result.data.view_url, // URL directa de la imagen
      };
    } else {
      return {
        success: false,
        error: result.message || 'Error al subir la imagen',
      };
    }
  } catch (error) {
    console.error('Error uploading image:', error);
    return {
      success: false,
      error: 'Error de conexión al subir la imagen',
    };
  }
};