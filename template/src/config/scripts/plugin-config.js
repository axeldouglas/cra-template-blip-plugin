/* eslint-disable */
const fs = require('fs');
const replace = require('replace-in-file');

const CURRENT_CHARTS_NAME = !!process.argv[3] ? process.argv[3] : 'PLUGIN_NAME';
const NEW_CHARTS_NAME = !!process.argv[2]
    ? process.argv[2]
    : process.env.REACT_APP_NAME;

/**
 * CHARTS
 * rename charts folder
 * deep renaming (charts path files)
 */
function deepChartsRename() {
    const charts_look_up_path = './charts/**/*';
    const regex_charts = new RegExp(`${CURRENT_CHARTS_NAME}`, 'g');

    const options = {
        files: charts_look_up_path,
        from: regex_charts,
        to: NEW_CHARTS_NAME
    };

    try {
        const results = replace.sync(options);
        console.log(`Replaced ${results.length} file(s).`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

// rename charts folder
function chartsRename() {
    const charts_current_path = `./charts/${CURRENT_CHARTS_NAME}`;
    const charts_new_path = `./charts/${NEW_CHARTS_NAME}`;

    try {
        if (fs.existsSync(charts_current_path)) {
            // path exists, then rename
            fs.renameSync(charts_current_path, charts_new_path);
            console.log('Directory renamed.');

            // deep rename
            deepChartsRename();
        } else {
            console.warn('Warning: Charts path not fount.');
        }
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

/**
 * APP SETTINGS
 * create an appsetting copy to development.appsetting file
 */
function copyAppSetting() {
    const config_path = './src/config';
    const app_settings_file = `${config_path}/appsettings.json`;
    const dev_app_settings_file = `${config_path}/appsettings.development.json`;

    try {
        if (!fs.existsSync(dev_app_settings_file)) {
            // file not exists, then create one
            fs.copyFileSync(app_settings_file, dev_app_settings_file);
            console.log('Development appsettings file created.');
        } else {
            console.warn(
                'Warning: Development appsettings file already exists.'
            );
        }
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

// deep renaming (charts path and files)
chartsRename();

// create development.appsetting file
copyAppSetting();

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', (error) => {
    throw error;
});

process.exit();
