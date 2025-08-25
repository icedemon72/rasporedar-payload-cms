import type { CollectionBeforeChangeHook, CollectionAfterReadHook } from 'payload';

type BlogDoc = {
  relatedBlogs?: Array<Record<string, any>>; // Or better type your related blogs here if possible
  [key: string]: any;
};

export const removeRelatedFields: CollectionAfterReadHook = async ({ doc }: { doc: BlogDoc }) => {
  if (doc.relatedBlogs && Array.isArray(doc.relatedBlogs)) {
    doc.relatedBlogs = doc.relatedBlogs.map(({ content, seo, featuredImage, ...rest }) => ({
      ...rest,
      featuredImage, // explicitly keep featuredImage
    }));
  }
  return doc;
};
export const rewriteAuthor: CollectionAfterReadHook = async ({ doc }: { doc: BlogDoc }) => {
  if (doc.author && doc.author?.name) {
    doc.author = doc.author.name;
  }

  return doc;
}