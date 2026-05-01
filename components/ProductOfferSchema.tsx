interface ProductOfferSchemaProps {
  name: string;
  description: string;
  url: string;
  lowPrice: string;
  highPrice?: string;
  category?: string;
}

const ProductOfferSchema = ({
  name,
  description,
  url,
  lowPrice,
  highPrice,
  category = "3D-Druck Service"
}: ProductOfferSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "brand": {
      "@type": "Brand",
      "name": "ekdruck e.U."
    },
    "category": category,
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EUR",
      "lowPrice": lowPrice,
      ...(highPrice && { "highPrice": highPrice }),
      "offerCount": "3",
      "availability": "https://schema.org/InStock",
      "url": url,
      "seller": {
        "@type": "Organization",
        "name": "ekdruck e.U."
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "31",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ProductOfferSchema;
