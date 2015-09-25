var presentation = (function () {

    /**
     * @type {string}
     */
    var titleFormattiong = 'color: blue; font-size: 14px;';

    return {

        /**
         * @param {String} title
         */
        section: function (title) {
            console.log('\n\n');

            title = '%c' + title;
            console.log(title, titleFormattiong);

            console.log('%c' + '-'.repeat(title.length), titleFormattiong);
            console.log('\n');
        },

        /**
         * @param {String} title
         */
        introduce: function (title) {
            console.info('%c// ' + title, 'color: #aaa; font-size: 12px;');
        },

        /**
         * @param {String} title
         * @param {Function} callback
         */
        present: function (title, callback) {
            this.introduce(title);

            callback.bind(window);
            callback();

            console.log('');
        }
    }
})();
