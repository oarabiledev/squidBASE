import {loadModule} from './App_Core/standard_lib.js';
import {ui} from './Modules/Native Design/main.js'
loadModule('Native Design');

const cardNo = '123456789  987654321'

function onStart() {
    let height = window.innerHeight;
    const lay = ui.addLayout('Linear', '', null, null, 'main');
    lay.setBackColor('#ECE0D9');

    const lay2 = ui.addLayout('Linear', '[Left]', 350, 150, lay);
    lay2.setCornerRadius(5, 'px');
    lay2.setBackColor('#007BFF');
    lay2.setMargins(25, 25, 25)
    lay2.animate('animate__slideInDown')
    lay2.setStyle({
        background: 'rgba(0, 128, 0, 0.1)', // Green glassmorphic background
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(0, 128, 0, 0.2)', // Green border
        borderRadius: '10px',
        padding: '20px',
    });

    const cardName = ui.addText('JOHN MCDOUGHOUNUT DOE', null, null, 'h3,Monospace', null, lay2);

    const cardNum = ui.addText(cardNo, null, null, 'h3,Monospace', null, lay2)
    cardNum.setPosition(null, 55)

    const exp = ui.addText('Expires 08/29', null, null, 'Monospace,Multiline,h3,bold', null, lay2)
    exp.setPosition(null, 90)

    const info = ui.addText('squidBank Debit Card', null, null, 'Monospace,h3', null, lay2)
    info.setPosition(null, 155)
    info.setFontFile('Teko.ttf')
    const ht = ui.addText('Transaction History', null, null, 'h3,Monospace,left', null, lay)
    ht.setPosition(25, 250)
    ht.setTextColor('#333')
    ht.animate('animate__slideInDown')

    const mkpy = ui.addButton('Make Payment', 310, 50, null, lay)
    mkpy.setPosition(25, height - 84)
    mkpy.animate('animate__slideInUp')
    mkpy.setStyle({
        backgroundColor: '#04AA6D',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        cursor: 'pointer'
    });
    ui.render();
}

function appEvent(event) {
    alert(event)
}

document.addEventListener('DOMContentLoaded', function () {
    onStart();
});
