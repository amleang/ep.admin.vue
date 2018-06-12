exports.install = function (Vue, options) {
    /**系统高度 */
    Vue.prototype.wHeight = function () {
        return document.documentElement.clientHeight;
    }
}