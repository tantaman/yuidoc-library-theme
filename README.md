yuidoc-library-theme
======================

A YUIDOC theme for concise libraries.  Generates documentation
similar in style to:
* http://lodash.com/docs
* http://backbonejs.org/

When running yuidoc from command line:
    -t : themedir
    -H : helper js file

Ex.

    yuidoc -t _location_/yuidoc-library-theme -H _location_/yuidoc-library-theme/helpers/helpers.js

When running with grunt it is best to use this as a submodule.

Then under yuidoc.json options add:

    "themedir" : _location_/yuidoc-library-theme,
    "helpers" : [ _location_/yuidoc-library-theme/helpers/helpers.js ]

Ex.

    {
        "name": "Example",
        "url": "www.example.com",
        "version": "0.1.0",
        "options": {
            "paths": "_location to parse_",
            "outdir": "build/docs",
            "exclude": "lib,docs,build",
            "themedir": "_location_/yuidoc-library-theme",
            "helpers": ["_location_/yuidoc-library-theme/helpers/helpers.js"]
        }
    }

