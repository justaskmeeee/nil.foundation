import { client } from './client';

type SiteConfig = {
  isGlossaryOn: boolean;
  isReserachTagsOn: boolean;
};

export const getSiteConfig = async (): Promise<SiteConfig> => {
  const res = await client.get<{data?: {attributes: SiteConfig}}>('/config');

  if (!res?.data?.data?.attributes) throw new Error('No config found');

  return res.data.data.attributes;
};

