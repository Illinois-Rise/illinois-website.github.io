import Client from './Client'

export const ABSENTFORM_ENDPOINT = '/0/rows/'

export async function addAbsent(data: Object) {
    return await Client.post(ABSENTFORM_ENDPOINT, data)
    .then((res) => {
        return true;
    }).catch((e) => {
        return false
    })
}