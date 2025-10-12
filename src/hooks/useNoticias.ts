import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase/firebase';

// Interfaz para el tipo de datos de noticias
export interface Noticia {
  id: string;
  autor: string;
  categoria: string;
  conlusion: string; // Nota: en Firebase está como "conlusion" (typo original)
  cuerpo: string;
  fecha: any; // Puede ser Timestamp de Firebase
  frasedestacada: string;
  imagenautor: string;
  imagencentral: string;
  imagensecundaria: string;
  posicionautor: string;
  subtitulo: string;
  titulo: string;
}

// Función helper para formatear fechas de Firebase Timestamp
export const formatFirebaseDate = (fecha: any): string => {
  if (!fecha) return '';
  
  // Si es un Timestamp de Firebase con seconds
  if (fecha.seconds) {
    const date = new Date(fecha.seconds * 1000);
    const meses = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
    const dia = date.getDate();
    const mes = meses[date.getMonth()];
    const año = date.getFullYear();
    return `${dia} ${mes}, ${año}`;
  }
  
  // Si ya es un string, devolverlo directamente
  if (typeof fecha === 'string') return fecha;
  
  return '';
};

// Hook personalizado para manejar noticias
export const useNoticias = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "noticias"));
        const noticiasArray = querySnapshot.docs.map(doc => ({ 
          id: doc.id, 
          ...doc.data() 
        } as Noticia));
        
        setNoticias(noticiasArray);
        setError(null);
      } catch (err) {
        console.error("Error fetching noticias:", err);
        setError(err instanceof Error ? err.message : 'Error desconocido al cargar noticias');
      } finally {
        setLoading(false);
      }
    };

    fetchNoticias();
  }, []);

  return { noticias, loading, error, formatFirebaseDate };
};
