import { getQueryKeys } from '@/src/services/helper';

const namespace = 'givings';

export default {
  ...getQueryKeys(namespace),
  claim: `${namespace}/claim`
};
