{
    'name': 'Stepora Theme',
    'description': 'A premium shoe store theme for Odoo Website.',
    'category': 'Theme/eCommerce',
    'summary': 'Footwear, Shoes, eCommerce, Stepora',
    'sequence': 120,
    'version': '1.0',
    'depends': ['website', 'website_sale'],
    'data': [
        'views/pages.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            'theme_stepora/static/src/css/style.css',
            'theme_stepora/static/src/js/script.js',
        ],
    },
    'images': [
        'static/description/icon.png',
    ],
    'application': False,
    'auto_install': False,
    'license': 'LGPL-3',
}
