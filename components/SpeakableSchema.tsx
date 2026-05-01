interface SpeakableSchemaProps {
  url: string;
  cssSelectors?: string[];
}

const SpeakableSchema = ({ url, cssSelectors = ["h1", ".speakable"] }: SpeakableSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": cssSelectors
    },
    "url": url
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SpeakableSchema;
