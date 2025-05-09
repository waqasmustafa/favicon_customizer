{
    'name': 'Favicon Customizer',
    'version': '1.0',
    'summary': 'Allows custom favicon upload for company',
    'description': """
        This module allows companies to upload their own favicon
        which will replace the default Odoo favicon across all interfaces.
    """,
    'author': 'Waqas Mustafa',
    'website': 'https://ippbx.com',
    'category': 'Tools',
    'depends': ['base', 'web'],
    'data': [
        'views/res_company_views.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'favicon_customizer/static/src/js/favicon.js',
        ],
    },
    'installable': True,
    'application': False,
    'auto_install': False,
    'license': 'LGPL-3',
}