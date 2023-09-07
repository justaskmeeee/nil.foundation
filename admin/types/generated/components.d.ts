import type { Schema, Attribute } from '@strapi/strapi';

export interface WordParagraphs extends Schema.Component {
  collectionName: 'components_word_paragraphs';
  info: {
    displayName: 'Paragraphs';
    icon: 'quote';
  };
  attributes: {
    Paragraph: Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'word.paragraphs': WordParagraphs;
    }
  }
}
