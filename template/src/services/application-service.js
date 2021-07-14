import { IframeMessageProxy as IMP } from 'iframe-message-proxy';
import * as IMPActions from '../constants/iframe-message-proxy-actions';
import * as IMPContainer from '../constants/iframe-message-proxy-container';
import settings from '../config';

const CONFIGURATION_URL = `${settings.blip.commands_url}/configuration`;
const POST_TYPE = 'application/json';

const getApplicationData = async (full_identity = null) => {
    const { response: application } = await IMP.sendMessage({
        action: IMPActions.get_application,
        content: full_identity
    });
    return application;
};

const getConfigurationData = async () => {
    const { response } = await IMP.sendMessage({
        action: IMPContainer.Actions.send_command,
        content: {
            command: {
                method: IMPContainer.CommandMethods.GET,
                uri: CONFIGURATION_URL
            }
        }
    });

    return response;
};

const setConfigurationData = async (payload) => {
    const { response } = await IMP.sendMessage({
        action: IMPContainer.Actions.send_command,
        content: {
            command: {
                method: IMPContainer.CommandMethods.SET,
                uri: CONFIGURATION_URL,
                type: POST_TYPE,
                resource: payload
            }
        }
    });

    return response;
};

const getCurrentLanguage = async () => {
    const { response } = await IMP.sendMessage({
        action: IMPContainer.Actions.get_current_language
    });

    return response;
};

export {
    getApplicationData,
    getConfigurationData,
    setConfigurationData,
    getCurrentLanguage
};
