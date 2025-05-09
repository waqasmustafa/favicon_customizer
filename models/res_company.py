# -*- coding: utf-8 -*-

from odoo import models, fields, api

class ResCompany(models.Model):
    _inherit = 'res.company'

    favicon = fields.Binary(
        string="Company Favicon",
        help="Upload a 16x16 or 32x32 pixel image to use as favicon (.ico or .png)"
    )

    @api.model
    def _get_favicon(self, favicon):
        """ Helper method to get the favicon """
        if favicon:
            return favicon
        return self.env['ir.config_parameter'].sudo().get_param('web.base.url') + '/web/static/img/favicon.ico'