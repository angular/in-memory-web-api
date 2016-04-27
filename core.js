System.register(['./in-memory-backend.service', './http-status-codes'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (in_memory_backend_service_1_1) {
                exportStar_1(in_memory_backend_service_1_1);
            },
            function (http_status_codes_1_1) {
                exportStar_1(http_status_codes_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=core.js.map