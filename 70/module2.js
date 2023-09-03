window.myApp = (function (module) {
    module.utils.stringCaseInsensitiveEquals = function (string1, string2) {
        return (string1.toUpperCase() === string2.toUpperCase());
    }
    return {
        stringCaseInsensitiveEquals
    }
    return module;
}(window.myApp || {}));