import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: object | object[];
}

export default function SEOHead({
  title,
  description,
  canonical,
  keywords,
  ogImage = "https://theadihomes.co.in/logo.png",
  ogType = "website",
  jsonLd,
}: SEOHeadProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta tags
    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);
    setMeta("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setMeta("author", "The ADI Homes");
    setMeta("geo.region", "IN-UP");
    setMeta("geo.placename", "Greater Noida West");
    setMeta("geo.position", "28.5700;77.4500");
    setMeta("ICBM", "28.5700, 77.4500");

    // Open Graph
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", ogType, true);
    setMeta("og:image", ogImage, true);
    setMeta("og:site_name", "The ADI Homes", true);
    setMeta("og:locale", "en_IN", true);
    if (canonical) setMeta("og:url", canonical, true);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage);
    setMeta("twitter:site", "@theadihomes");

    // Canonical
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    // JSON-LD
    if (jsonLd) {
      // Remove old dynamic JSON-LD
      document.querySelectorAll('script[data-seo-head="true"]').forEach((el) => el.remove());
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      schemas.forEach((schema) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo-head", "true");
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }

    return () => {
      document.querySelectorAll('script[data-seo-head="true"]').forEach((el) => el.remove());
    };
  }, [title, description, canonical, keywords, ogImage, ogType, jsonLd]);

  return null;
}
