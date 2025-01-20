import { getQueryKeys } from '@/src/services/helper';

const namespace = 'posts';

export default {
  ...getQueryKeys(namespace),
};
