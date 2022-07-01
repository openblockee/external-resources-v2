/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_SL_SENSOR_CATEGORY}" id="SL_SENSOR_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF">
    <block type="qdp_esp32_lightSensor"></block>
    <block type="qdp_esp32_sound"></block>
</category>

`;

}

exports = addToolbox;
