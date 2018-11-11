import {DOMIsLoaded} from "../../../scripts/utils";

const createDivForQR = () => {
    const div = document.createElement('div')
    const div2 = document.createElement('div')

    div.id = 'h-rs-wrap__overlay'
    div.className = 'active-overlay'
    div2.id = 'h-rs__bottom__imgQrCode'

    document.getElementById('app').appendChild(div)
    document.getElementById('app').appendChild(div2)
}

NodeList.prototype.remove = HTMLCollection.prototype.remove = () => {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

/**
 * @param event
 */
DOMIsLoaded((event) => {
    const bntQr = document.getElementById('BtnQrCode')
    bntQr.onclick = () => {
        createDivForQR()
        /*createQrCode()*/
        if (document.querySelector('#h-rs-wrap__overlay').classList) {
            document.querySelector('#h-rs-wrap__overlay').classList.contains('active-overlay')
            document.getElementById('h-rs-wrap__overlay').addEventListener('click', () => {
                document.getElementById('h-rs-wrap__overlay').remove();
                document.getElementById('h-rs__bottom__imgQrCode').remove();
            } )
        }
    }
})

const createQrCode = () => {
    const typeNumber = 4;
    const errorCorrectionLevel = 'L';
    let qr = qrcode(typeNumber, errorCorrectionLevel);
    const textForQr = document.querySelector('#text').value
    qr.addData(textForQr);
    qr.make();
    document.getElementById('placeHolder').innerHTML = qr.createImgTag();
}