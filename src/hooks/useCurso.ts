import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase/firebase';

// Interfaz para el tipo de datos de noticias
export interface Curso {
  id: string;
  categoria: string;
  cuerpo: string;
  fecha: []; // Puede ser Timestamp de Firebase
  imagen: string;
  inscriptos: number;
  subtitulo: string;
  titulo: string;
}

// Función helper para formatear fechas de Firebase Timestamp
export const formatFirebaseDate = (fecha: any): { dia: number; mes: string; año: number } => {
  if (!fecha) return { dia: 0, mes: '', año: 0 };
  
  // Si es un Timestamp de Firebase con seconds
  if (fecha.seconds) {
    const date = new Date(fecha.seconds * 1000);
    const meses = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
    const dia = date.getDate();
    const mes = meses[date.getMonth()];
    const año = date.getFullYear();
    //return `${dia} ${mes}, ${año}`;
    return {dia, mes, año};
  }
  
  // Si ya es un string, devolverlo directamente
  if (typeof fecha === 'string') return { dia: 0, mes: '', año: 0 };

  return { dia: 0, mes: '', año: 0 };
};

// Hook personalizado para manejar Cursos
export const useCursos = () => {
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "cursos"));
        const cursosArray = querySnapshot.docs.map(doc => ({ 
          id: doc.id, 
          ...doc.data() 
        } as Curso));
        
        setCursos(cursosArray);
        setError(null);
      } catch (err) {
        console.error("Error fetching cursos:", err);
        setError(err instanceof Error ? err.message : 'Error desconocido al cargar cursos');
      } finally {
        setLoading(false);
      }
    };

    fetchCursos();
  }, []);

  return { cursos, loading, error, formatFirebaseDate };
};
