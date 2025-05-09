odoo.define('favicon_customizer.favicon', function (require) {
    "use strict";

    var session = require('web.session');
    var ajax = require('web.ajax');

    function updateFavicon() {
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        
        if (session.company_id) {
            ajax.jsonRpc('/web/image', 'call', {
                model: 'res.company',
                id: session.company_id,
                field: 'favicon',
            }).then(function(url) {
                if (url) {
                    link.href = url;
                } else {
                    link.href = '/web/static/img/favicon.ico';
                }
                document.head.appendChild(link);
            });
        } else {
            link.href = '/web/static/img/favicon.ico';
            document.head.appendChild(link);
        }
    }

    // Initial update
    updateFavicon();

    // Update when company changes
    session.on('session_bind', updateFavicon);
});