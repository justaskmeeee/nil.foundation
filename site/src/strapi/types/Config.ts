export interface Config {
    collectionName?: 'configs';
    info?: {
      singularName: 'config';
      pluralName: 'configs';
      displayName: 'Config';
      description: '';
    };
    options?: {
      draftAndPublish: true;
    };
    attributes: {
      isGlossaryOn: boolean;
      isResearchTagsOn: boolean;
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy: Attribute.Relation<
        'api::config.config',
        'oneToOne',
        'admin::user'
      > &
        Attribute.Private;
      updatedBy: Attribute.Relation<
        'api::config.config',
        'oneToOne',
        'admin::user'
      > &
        Attribute.Private;
    };
  }