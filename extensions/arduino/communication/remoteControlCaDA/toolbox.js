/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_REMOTECONTROLCADA_CATEGORY}" id="BKY_REMOTECONTROLCADA_CATEGORY" colour="#9966FF" secondaryColour="#774DCB">
    <block type="remoteControlCaDA_setVibrateIntensity" id="remoteControlCaDA_setVibrateIntensity">
        <value name="VALUE">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
    <block type="remoteControlCaDA_readButtonState" id="remoteControlCaDA_readButtonState">
    </block>
    <block type="remoteControlCaDA_readSwitchState" id="remoteControlCaDA_readSwitchState">
    </block>
    <block type="remoteControlCaDA_readAnalogPort" id="remoteControlCaDA_readAnalogPort">
    </block>
    <block type="remoteControlCaDA_readEquipAcceler" id="remoteControlCaDA_readEquipAcceler">
    </block>
    <block type="remoteControlCaDA_readEquipState" id="remoteControlCaDA_readEquipState">
    </block>
</category>`;
}

exports = addToolbox;
