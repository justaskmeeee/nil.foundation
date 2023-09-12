export type Collection = 'configs' | 'blogs' | 'research' | 'glossaries' | 'tags' | 'categories'
export type CollectionTypeWithMeta = `${Collection}+meta`
export type CollectionType = Collection | CollectionTypeWithMeta
