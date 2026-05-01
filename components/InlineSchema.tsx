'use client'

import { useEffect } from 'react';

interface InlineSchemaProps {
  id: string;
  schema: Record<string, any>;
}

const InlineSchema = ({ id, schema }: InlineSchemaProps) => {
  useEffect(() => {
    const scriptId = `schema-${id}`;
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = scriptId;
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [id, schema]);

  return null;
};

export default InlineSchema;
