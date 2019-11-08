import { Permissions, Notifications } from 'expo';

async function registerForPushNotification() {
    const {status} = await Permissions.getExponentPushTokenAsync(Permissions.NOTI)
}