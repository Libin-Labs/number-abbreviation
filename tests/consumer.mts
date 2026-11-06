import * as api from '@lp-labs/number-abbreviation';
import { abbreviateNumber } from '@lp-labs/number-abbreviation';
console.log(abbreviateNumber(1250000));
// @ts-expect-error invalid argument must be rejected by declarations
api.abbreviateNumber('large');
