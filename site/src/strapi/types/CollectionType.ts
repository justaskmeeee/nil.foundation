export type Collection = 'configs' | 'blogs' | 'research' | 'glossaries'
export type CollectionTypeWithMeta = `${Collection}+meta`
export type CollectionType = Collection | CollectionTypeWithMeta
