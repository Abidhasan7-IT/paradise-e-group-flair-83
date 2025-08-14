import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  section?: 'about' | 'services' | 'portfolio' | 'contact';
}

export const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  section 
}: SEOProps) => {
  const defaultTitle = 'Paradise Interior & Exterior - Premium Interior Design Services in Dhaka, Bangladesh | E-Group';
  const defaultDescription = 'Transform your space with Paradise Interior & Exterior. Award-winning interior design services in Dhaka, Bangladesh. Residential & commercial design, renovation & remodeling.';
  const defaultKeywords = 'interior design, interior designer, Dhaka, Bangladesh, residential design, commercial interior, renovation, remodeling, home decoration, office design, luxury interior, modern design, E-Group, Paradise Interior';
  const defaultImage = '/src/assets/hero-slide-1.jpg';
  const defaultUrl = 'https://paradise-interior.com';

  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const finalImage = image || defaultImage;
  const finalUrl = url || defaultUrl;

  useEffect(() => {
    // Update document title
    document.title = finalTitle;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', finalDescription);
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', finalKeywords);
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', finalUrl);
    
    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', content);
    };
    
    updateOGTag('og:title', finalTitle);
    updateOGTag('og:description', finalDescription);
    updateOGTag('og:image', finalImage);
    updateOGTag('og:url', finalUrl);
    updateOGTag('og:type', type);
    
    // Update Twitter Card tags
    const updateTwitterTag = (property: string, content: string) => {
      let twitterTag = document.querySelector(`meta[property="${property}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('property', property);
        document.head.appendChild(twitterTag);
      }
      twitterTag.setAttribute('content', content);
    };
    
    updateTwitterTag('twitter:title', finalTitle);
    updateTwitterTag('twitter:description', finalDescription);
    updateTwitterTag('twitter:image', finalImage);
    updateTwitterTag('twitter:url', finalUrl);
    
  }, [finalTitle, finalDescription, finalKeywords, finalImage, finalUrl, type]);

  return null; // This component doesn't render anything
};

export default SEO;
