import { init } from '@rematch/core';
import * as models from '../models';

const store = init({
    models,
    name: 'Redux store Netflix',
});

export default store;