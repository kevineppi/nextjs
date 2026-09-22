interface ProductOfferSchemaProps {
  name: string;
  description: string;
  url: string;
  lowPrice: string;
  highPrice?: string;
  category?: string;
  image?: string;
}

const ProductOfferSchema = ({
  name,
  description,
  url,
  lowPrice,
  highPrice,
  category = "3D-Druck Service",
  image = "https://www.ek-druck.at/cases/ortsmodell-uebersicht.jpg"
}: ProductOfferSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "image": image,
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
      
      "availability": "https://schema.org/InStock",
      "url": url,
      "seller": {
        "@type": "Organization",
        "name": "ekdruck e.U."
      }
    }
    // aggregateRating entfernt: einzige Bewertungsquelle ist global orgSchema() (Review-Snippet-Dedup)
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ProductOfferSchema;
