from odoo import models, fields

class ResCompany(models.Model):
    _inherit = 'res.company'

    favicon = fields.Binary(
        string="Company Favicon",
        help="Upload a custom favicon (16x16 or 32x32 pixels recommended)",
        attachment=True
    )