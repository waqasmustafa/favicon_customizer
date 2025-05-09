{
    'name': 'Favicon Customizer',
    'version': '1.0.1',
    'summary': 'Custom Favicon for Odoo Backend',
    'description': """
        Allows companies to upload their own favicon that replaces
        the default Odoo favicon across all backend interfaces.
    """,
    'author': 'Waqas Mustafa',
    'website': 'https://yourwebsite.com',
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