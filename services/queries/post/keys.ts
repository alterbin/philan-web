import { getQueryKeys } from '@/services/helper';

const namespace = 'posts';

export default {
  ...getQueryKeys(namespace),
};
