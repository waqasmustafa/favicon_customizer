/** @odoo-module **/

import { session } from "@web/session";
import { registry } from "@web/core/registry";
import { url } from "@web/core/utils/urls";

const serviceRegistry = registry.category("services");

const faviconService = {
    dependencies: ["company"],
    
    start(env, { company }) {
        function updateFavicon() {
            const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
            link.type = 'image/x-icon';
            link.rel = 'shortcut icon';
            
            if (company.currentCompany.favicon) {
                link.href = url('/web/image', {
                    model: 'res.company',
                    id: company.currentCompany.id,
                    field: 'favicon',
                });
            } else {
                link.href = '/web/static/img/favicon.ico';
            }
            document.head.appendChild(link);
        }

        // Initial update
        updateFavicon();

        // Update when company changes
        company.on("update", updateFavicon);
    }
};

serviceRegistry.add("favicon_service", faviconService);