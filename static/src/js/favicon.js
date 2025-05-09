odoo.define('favicon_customizer.favicon', function (require) {
    "use strict";

    var session = require('web.session');
    var rpc = require('web.rpc');

    function updateFavicon() {
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        
        if (session.company_id) {
            rpc.query({
                model: 'res.company',
                method: 'read',
                args: [[session.company_id], ['favicon']],
            }).then(function(result) {
                if (result && result[0] && result[0].favicon) {
                    link.href = 'data:image/png;base64,' + result[0].favicon;
                } else {
                    link.href = '/web/static/img/favicon.ico';
                }
                document.getElementsByTagName('head')[0].appendChild(link);
            });
        } else {
            link.href = '/web/static/img/favicon.ico';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
    }

    // Update on initial load
    updateFavicon();

    // Update when company changes
    session.on('session_bind', function() {
        updateFavicon();
    });

    var originalSetCompanies = session.setCompanies;
    session.setCompanies = function(main_company_id, company_ids) {
        var result = originalSetCompanies.apply(this, arguments);
        updateFavicon();
        return result;
    };
});