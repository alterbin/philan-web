import { getQueryKeys } from '@/src/services/helper';

const namespace = 'givens';

export default {
  ...getQueryKeys(namespace),
  claim: `${namespace}/claim`
};
