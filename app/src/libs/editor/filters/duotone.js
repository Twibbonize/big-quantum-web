export default {
    type: 'Duotone',
    matrix: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    mainParameter: false,
    colorsOnly: true,
    initialize: function (options) {
        this.callSuper('initialize', options);
        // create a new array instead mutating the prototype with push
        this.matrix = this.matrix.slice(0);
    }
};
