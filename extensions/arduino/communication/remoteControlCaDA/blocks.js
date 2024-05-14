/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#9966FF';
    const secondaryColour = '#774DCB';

    Blockly.Blocks.remoteControlCaDA_setVibrateIntensity = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.REMOTECONTROLCADA_SETVIBRATEINTENSITY,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VALUE'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.remoteControlCaDA_readButtonState = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.REMOTECONTROLCADA_READBUTTONSTATE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'BUTTON',
                        options: [
                            [Blockly.Msg.REMOTECONTROLCADA_BUTTONMENU_REDLEFT, '0'],
                            [Blockly.Msg.REMOTECONTROLCADA_BUTTONMENU_REDRIGHT, '1'],
                            [Blockly.Msg.REMOTECONTROLCADA_BUTTONMENU_BLACKUP, '2'],
                            [Blockly.Msg.REMOTECONTROLCADA_BUTTONMENU_BLACKDOWN, '3'],
                            [Blockly.Msg.REMOTECONTROLCADA_BUTTONMENU_BLUELEFT, '4'],
                            [Blockly.Msg.REMOTECONTROLCADA_BUTTONMENU_BLUERIGHT, '5'],
                            [Blockly.Msg.REMOTECONTROLCADA_BUTTONMENU_YELLOWUP, '6'],
                            [Blockly.Msg.REMOTECONTROLCADA_BUTTONMENU_YELLOWDOWN, '7']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.remoteControlCaDA_readSwitchState = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.REMOTECONTROLCADA_READSWITCHSTATE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SWITCH',
                        options: [
                            [Blockly.Msg.REMOTECONTROLCADA_SWITCHMENU_RED, '0'],
                            [Blockly.Msg.REMOTECONTROLCADA_SWITCHMENU_BLACK, '1'],
                            [Blockly.Msg.REMOTECONTROLCADA_SWITCHMENU_BLUE, '2'],
                            [Blockly.Msg.REMOTECONTROLCADA_SWITCHMENU_YELLOW, '3']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.remoteControlCaDA_readAnalogPort = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.REMOTECONTROLCADA_READANALOGPORT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'HANDLE',
                        options: [
                            [Blockly.Msg.REMOTECONTROLCADA_HANDLEMENU_LEFTX, '0'],
                            [Blockly.Msg.REMOTECONTROLCADA_HANDLEMENU_LEFTY, '1'],
                            [Blockly.Msg.REMOTECONTROLCADA_HANDLEMENU_RIGHTX, '2'],
                            [Blockly.Msg.REMOTECONTROLCADA_HANDLEMENU_RIGHTY, '3']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.remoteControlCaDA_readEquipAcceler = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.REMOTECONTROLCADA_READEQUIPACCELER,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'ACCELER',
                        options: [
                            [Blockly.Msg.REMOTECONTROLCADA_ACCELERMENU_X, '0'],
                            [Blockly.Msg.REMOTECONTROLCADA_ACCELERMENU_Y, '1'],
                            [Blockly.Msg.REMOTECONTROLCADA_ACCELERMENU_Z, '2'],
                            [Blockly.Msg.REMOTECONTROLCADA_ACCELERMENU_BAT, '3']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.remoteControlCaDA_readEquipState = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.REMOTECONTROLCADA_READEQUIPSTATE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
                            [Blockly.Msg.REMOTECONTROLCADA_DEVICESTATEMENU_FLAT, '0'],
                            [Blockly.Msg.REMOTECONTROLCADA_DEVICESTATEMENU_TILT, '1'],
                            [Blockly.Msg.REMOTECONTROLCADA_DEVICESTATEMENU_FORWARD, '2'],
                            [Blockly.Msg.REMOTECONTROLCADA_DEVICESTATEMENU_BACKWARD, '3'],
                            [Blockly.Msg.REMOTECONTROLCADA_DEVICESTATEMENU_LEFT, '4'],
                            [Blockly.Msg.REMOTECONTROLCADA_DEVICESTATEMENU_RIGHT, '5'],
                            [Blockly.Msg.REMOTECONTROLCADA_DEVICESTATEMENU_SHAKING, '6'],
                            [Blockly.Msg.REMOTECONTROLCADA_DEVICESTATEMENU_DISPLACEMENT, '7']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
