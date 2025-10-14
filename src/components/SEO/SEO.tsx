import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  canonical?: string;
}

/**
 * Componente SEO para gestionar meta tags sin dependencias externas
 * Compatible con React 19
 */
export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterCard = 'summary_large_image',
  canonical,
}) => {
  useEffect(() => {
    // Title
    if (title) {
      document.title = title;
    }

    // Meta tags existentes que queremos actualizar
    const metaTags: { [key: string]: string } = {};

    if (description) metaTags['description'] = description;
    if (keywords) metaTags['keywords'] = keywords;

    // Open Graph tags
    if (ogTitle) metaTags['og:title'] = ogTitle;
    if (ogDescription) metaTags['og:description'] = ogDescription;
    if (ogImage) metaTags['og:image'] = ogImage;
    if (ogUrl) metaTags['og:url'] = ogUrl;
    metaTags['og:type'] = 'website';

    // Twitter Card tags
    metaTags['twitter:card'] = twitterCard;
    if (ogTitle) metaTags['twitter:title'] = ogTitle;
    if (ogDescription) metaTags['twitter:description'] = ogDescription;
    if (ogImage) metaTags['twitter:image'] = ogImage;

    // Crear o actualizar meta tags
    Object.entries(metaTags).forEach(([name, content]) => {
      const property = name.startsWith('og:') || name.startsWith('twitter:') ? 'property' : 'name';
      let element = document.querySelector(`meta[${property}="${name}"]`) as HTMLMetaElement;

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(property, name);
        document.head.appendChild(element);
      }

      element.content = content;
    });

    // Canonical link
    if (canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;

      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.rel = 'canonical';
        document.head.appendChild(linkElement);
      }

      linkElement.href = canonical;
    }

    // Cleanup function (opcional, para limpiar cuando el componente se desmonte)
    return () => {
      // No limpiamos los tags porque queremos que persistan
      // hasta que otra página los reemplace
    };
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl, twitterCard, canonical]);

  return null; // Este componente no renderiza nada
};
