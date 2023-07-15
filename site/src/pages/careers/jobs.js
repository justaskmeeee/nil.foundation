import MetaLayout from 'components/MetaLayout/MetaLayout';
import OpenPositions from 'pages/OpenPositions';

import { jobsSeoData } from 'stubs/careersPageData';

const OpenPositionsPage = () => (
  <MetaLayout seo={jobsSeoData}>
    <OpenPositions />
  </MetaLayout>
);

export default OpenPositionsPage;
