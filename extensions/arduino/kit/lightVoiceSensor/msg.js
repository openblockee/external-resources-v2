/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        SL_SENSOR_CATEGORY:'Light sound Module',
        qdp_esp32_lightSensor:'Light sensor Port %1',
        qdp_esp32_sound:'Sound sensor Port %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        SL_SENSOR_CATEGORY:'声光模块',
        qdp_esp32_lightSensor:'光线传感器 端口 %1',
        qdp_esp32_sound:'声音传感器 端口 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        SL_SENSOR_CATEGORY:'聲光模組',
        qdp_esp32_lightSensor:'光線感測器 端口 %1',
        qdp_esp32_sound:'聲音感測器 端口 %1'
    });
    return Blockly;
}

exports = addMsg;
