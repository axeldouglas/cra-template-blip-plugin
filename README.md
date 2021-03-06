# BLiP plugin template
[![NPM Version][npm-badge]][npm-url]
[![Downloads][npm-downloads-badge]][npm-downloads-url]
[![License][license-badge]][license-url]

BLiP plugin it's a technology-agnostic way to plug unnoficial features to enhance the portal capabilities.

This project aims to give the initial skill needed to develop and build your own plugins.

## File Structure

Assuming your folder is called `blip-plugin-project`.
Whatever name you choose will replace all occurrences of that string in the project

```json
πblip-plugin-project
ββββπcharts
β   ββββπblip-plugin-project
β       ββββπtemplates
β       β   ββββ_helpers.tpl
β       β   ββββ...
β       ββββ.helmignore
β       ββββChart.yaml
β       ββββvalues.yaml
ββββπsrc
β   ββββπassets
β   β   ββββπimages
β   β   β   ββββ...
β   β   ββββπstyles
β   β        ββββapp.scss
β   ββββπcomponents
β   β   ββββπSomeComponent
β   β        ββββSomeComponent.js
β   β        ββββindex.js
β   ββββπconfig
β   β   ββββπjest
β   β   β   ββββfileTransform.js
β   β   ββββπscripts
β   β   β   ββββplugin-config.js
β   β   βββββοΈappsettings.json
β   β   ββββindex.js
β   ββββπconstants
β   β   ββββapplication-actions.js
β   β   ββββ...
β   ββββπfactory
β   β   ββββapi.js
β   ββββπhooks
β   β   ββββstore.js
β   β   ββββuseCombinedReducers.js
β   β   ββββuseFetch.js
β   ββββπpages
β   β   ββββπHome
β   β       ββββπcomponents
β   β       β   ββββπHeader
β   β       β        ββββHeader.jsx
β   β       β        ββββindex.js
β   β       ββββHome.js
β   β       ββββindex.js
β   ββββπroutes
β   β   ββββAnalyticts.js
β   β   ββββindex.js
β   β   ββββInitialize.js
β   β   ββββRoutes.js
β   ββββπservices
β   β   ββββapplication-service.js
β   β   ββββ...
β   ββββπstore
β   β   ββββπactions
β   β   β   ββββapplication.js
β   β   β   ββββ...
β   β   ββββπmiddleware
β   β   β   ββββapplication.js
β   β   β   ββββ...
β   β   ββββπreducers
β   β   β   ββββapplication.js
β   β   β   ββββ...
β   β   ββββcombinedMiddlewares.js
β   β   ββββconnect.js
β   β   ββββindex.js
β   ββββπtranslate
β   β   ββββπlocale
β   β   |   ββββ...
β   β   β   ββββπpt-br
β   β   β   β   ββββ...
β   β   β   ββββindex.js
β   β   ββββindex.js
β   ββββπutils
β   β   ββββ...
β   ββββApp.js
β   ββββindex.js
βββββοΈpackage.json
ββββ...
```

## Usage

```bash
npx create-react-app PROJECT_NAME --template blip-plugin

#or

yarn create react-app PROJECT_NAME --template blip-plugin
```

> Note: `npx` command installs most recent stable version of CRA from npm. `--template` parameter points to this template, note that `cra-template-` prefix is omitted.

Access the project folder.

```bash
cd PROJECT_NAME
```

Execute the basic plugin configuration.

```bash
npm run config:plugin

#or

yarn config:plugin
```

> Note: This command its necessary to avoid manually configuration. That will config `./charts` and `appsettings.json` automatically.

Then, run the project.

```bash
npm start

#or

yarn start
```

Now just add the plugin to your chatbot and enjoy!

## More information
[Blip plugin template](https://github.com/axeldouglas/cra-template-blip-plugin/tree/main/template)

[npm-badge]: https://img.shields.io/npm/v/cra-template-blip-plugin.svg
[npm-url]: https://www.npmjs.com/package/cra-template-blip-plugin
[npm-downloads-badge]: https://img.shields.io/npm/dt/cra-template-blip-plugin.svg
[npm-downloads-url]: https://www.npmjs.com/package/cra-template-blip-plugin
[license-badge]: https://img.shields.io/github/license/axeldouglas/cra-template-blip-plugin.svg
[license-url]: https://opensource.org/licenses/MIT