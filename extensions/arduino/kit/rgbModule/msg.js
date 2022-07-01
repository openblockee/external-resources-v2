/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        ZHG_RGB_CATEGORY:'RGB Module',
        rgb_esp32_led:'RGB LED Port %1 total %2  NO %3 R %4 G %5 B %6',
        rgb_esp32_led2:'RGB LED Port %1 total %2  NO %3 Colour %4'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        ZHG_RGB_CATEGORY:'RGB模块',
        rgb_esp32_led:'RGB LED 端口 %1 总数 %2  灯号 %3 R %4 G %5 B %6',
        rgb_esp32_led2:'RGB LED 端口 %1 总数 %2  灯号 %3 颜色 %4'
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        ZHG_RGB_CATEGORY:'RGB模組',
        rgb_esp32_led:'RGB LED 端口 %1 總數 %2  燈號 %3 R %4 G %5 B %6',
        rgb_esp32_led2:'RGB LED 端口 %1 總數 %2  燈號 %3 顏色 %4'
    });
    return Blockly;
}

exports = addMsg;
