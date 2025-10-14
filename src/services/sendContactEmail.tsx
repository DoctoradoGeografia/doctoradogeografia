import emailjs from '@emailjs/browser';

// Configuración (obtener de https://www.emailjs.com/)
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID || 'tu_service_id';
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID || 'tu_template_id';
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY || 'tu_public_key';

export const sendContactEmail = async (formData: {
  nombre: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
}) => {
  try {
    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: formData.nombre,
        lastname: formData.lastname,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
        to_email: 'geografiadoctorado@gmail.com', // Email destino
      },
      PUBLIC_KEY
    );
    
    return { success: true, data: result };
  } catch (error) {
    console.error('Error enviando email:', error);
    return { success: false, error };
  }
};