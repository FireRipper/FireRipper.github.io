import {DOMIsLoaded} from "../../../scripts/utils";

const bntQr = document.getElementById('BtnQrCode')
/**
 * @param event
 */
DOMIsLoaded((event) => {
    bntQr.onclick = () => {
        createDivForQR()
        /*createQrCode()*/
    }
})

const createDivForQR = () => {
    const div = document.createElement('div')
    const div2 = document.createElement('div')

    div.id = 'h-rs-wrap__overlay'
    div2.id = 'h-rs__bottom__imgQrCode'

    document.getElementById('app').appendChild(div)
    document.getElementById('app').appendChild(div2)
}

const createQrCode = () => {

}
