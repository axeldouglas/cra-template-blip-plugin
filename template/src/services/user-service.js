import { IframeMessageProxy as IMP } from 'iframe-message-proxy';
import * as IMPContainer from '../constants/iframe-message-proxy-container';

const PERMISSION = 'write';
const PERMISSION_AREA = 'team';

const getLoggedUser = async () => {
    const { response } = await IMP.sendMessage({
        action: IMPContainer.Actions.send_command,
        content: {
            command: {
                method: IMPContainer.CommandMethods.GET,
                uri: '/account'
            },
            destination: IMPContainer.Destinations.blip_service
        }
    });

    return response;
};

const userHasPermission = async (
    permission = PERMISSION,
    area = PERMISSION_AREA
) => {
    const { response } = await IMP.sendMessage({
        action: IMPContainer.Actions.has_permissions,
        content: {
            permissionType: permission,
            customArea: area
        }
    });

    return response;
};

export { getLoggedUser, userHasPermission };
