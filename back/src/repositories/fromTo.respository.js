    import { BaseRepository } from './base.repository.js';

    export class FromToRepository extends BaseRepository {
    constructor({ model }) {
        super({ model });
        this.model = model;
    }

}
