export interface Config {
    collectionName?: string;
    info?: {
      singularName: 'config';
      pluralName: 'configs';
      displayName: 'Config';
      description: '';
    };
    options?: {
      draftAndPublish: true;
    };
    attributes?: {
      isGlossaryOn: boolean;
      isResearchTagsOn: boolean;
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: string;
      updatedBy?: string;
    };
  }