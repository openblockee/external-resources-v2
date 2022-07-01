/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color_c02_sensor = '#E06C78';

    const QH_lightSensor_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMyMDAzMTc4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwNDE1IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik01MTIgNTEybS0yOTkuNTIgMGEyOTkuNTIgMjk5LjUyIDAgMSAwIDU5OS4wNCAwIDI5OS41MiAyOTkuNTIgMCAxIDAtNTk5LjA0IDBaIiBwLWlkPSIxMDQxNiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik00ODYuNCAwaDQ4LjY0djEyNS40NEg0ODYuNHpNMjM0Ljg1NDQgNzguOTUwNGw0Mi4xMTItMjQuMzIgNjIuNzIgMTA4LjY0NjQtNDIuMTEyIDI0LjMyek01OC4wNjA4IDI3NS44MTQ0bDI0LjMyLTQyLjEzNzYgMTA4LjY0NjQgNjIuNzItMjQuMzIgNDIuMTM3NnpNMCA0ODYuNGgxMjUuNDR2NDguNjRIMHpNNTUuODU5MiA3NDYuNzI2NGwxMDguNjQ2NC02Mi43MiAyNC4zMiA0Mi4xMzc2LTEwOC42NDY0IDYyLjcyek0yMzUuNjczNiA5NDAuNDE2bDYyLjcyLTEwOC42MjA4IDQyLjEzNzYgMjQuMzItNjIuNzIgMTA4LjYyMDh6TTQ4Ni40IDg5Nmg0OC42NHYxMjUuNDRINDg2LjR6TTY4My44NTI4IDg1Ny4wMTEybDQyLjEzNzYtMjQuMzIgNjIuNzIgMTA4LjYyMDgtNDIuMTM3NiAyNC4zMnpNODMzLjg2ODggNzI0LjM3NzZsMjQuMzItNDIuMTM3NiAxMDguNjIwOCA2Mi43NDU2LTI0LjMyIDQyLjEzNzZ6TTg5NiA0ODYuNGgxMjUuNDR2NDguNjRIODk2ek04MzMuODk0NCAyOTcuNjUxMmwxMDguNjQ2NC02Mi43MiAyNC4zMiA0Mi4xMzc2LTEwOC42NzIgNjIuNzJ6TTY4NC4yODggMTY0LjYwOGw2Mi43Mi0xMDguNjIwOCA0Mi4xMTIgMjQuMzItNjIuNzIgMTA4LjY0NjR6IiBwLWlkPSIxMDQxNyIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg==";
    const QH_sound_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMyMDU0NDgzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjExMzQ1IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik01ODguNzgwNzYyIDMuMTAwMjM3Yy04LjUzMTE5Ni01LjY4NzQ2NC0xOS45MDYxMjQtMi44NDM3MzItMjguNDM3MzE5IDIuODQzNzMxbC0zNDEuMjQ3ODMyIDIzOC44NzM0ODNINTEuMzE1NDI3Yy0xNC4yMTg2NiAwLTI1LjU5MzU4NyAxMS4zNzQ5MjgtMjUuNTkzNTg3IDIyLjc0OTg1NXY0ODkuMTIxODkyYzAgMTQuMjE4NjYgMTEuMzc0OTI4IDIyLjc0OTg1NSAyNS41OTM1ODcgMjIuNzQ5ODU2aDE2Ny43ODAxODRsMzQ0LjA5MTU2NCAyMzguODczNDgyYzUuNjg3NDY0IDIuODQzNzMyIDguNTMxMTk2IDUuNjg3NDY0IDE0LjIxODY1OSA1LjY4NzQ2NCAyLjg0MzczMiAwIDguNTMxMTk2IDAgMTEuMzc0OTI4LTIuODQzNzMyIDguNTMxMTk2LTIuODQzNzMyIDE0LjIxODY2LTExLjM3NDkyOCAxNC4yMTg2Ni0xOS45MDYxMjNWMjMuMDA2MzZjMC04LjUzMTE5Ni01LjY4NzQ2NC0xNy4wNjIzOTItMTQuMjE4NjYtMTkuOTA2MTIzek04OTUuOTAzODExIDIyNy43NTUwNTljLTE0LjIxODY2LTE0LjIxODY2LTM0LjEyNDc4My0xNC4yMTg2Ni00OC4zNDM0NDMgMHMtMTQuMjE4NjYgMzYuOTY4NTE1IDAgNTQuMDMwOTA3YzQ4LjM0MzQ0MyA1NC4wMzA5MDcgNzkuNjI0NDk0IDEzMC44MTE2NjkgNzkuNjI0NDk0IDIxOC45NjczNTlzLTMxLjI4MTA1MSAxNjIuMDkyNzItNzkuNjI0NDk0IDIxOC45NjczNThjLTE0LjIxODY2IDE0LjIxODY2LTE0LjIxODY2IDM2Ljk2ODUxNSAwIDU0LjAzMDkwNyAxNC4yMTg2NiAxNC4yMTg2NiAzNC4xMjQ3ODMgMTQuMjE4NjYgNDguMzQzNDQzIDAgNjIuNTYyMTAyLTY4LjI0OTU2NiAxMDIuMzc0MzUtMTY0LjkzNjQ1MiAxMDIuMzc0MzQ5LTI3Mi45OTgyNjVzLTM5LjgxMjI0Ny0yMDQuNzQ4Njk5LTEwMi4zNzQzNDktMjcyLjk5ODI2NnogbS0xMDguMDYxODE0IDEwOC4wNjE4MTRjLTE0LjIxODY2LTE0LjIxODY2LTM0LjEyNDc4My0xNC4yMTg2Ni00OC4zNDM0NDIgMHMtMTQuMjE4NjYgMzYuOTY4NTE1IDAgNTQuMDMwOTA2YzI1LjU5MzU4NyAyNS41OTM1ODcgNDIuNjU1OTc5IDY1LjQwNTgzNCA0Mi42NTU5NzkgMTA4LjA2MTgxNHMtMTQuMjE4NjYgNzkuNjI0NDk0LTQyLjY1NTk3OSAxMDguMDYxODEzYy0xNC4yMTg2NiAxNC4yMTg2Ni0xNC4yMTg2NiAzNi45Njg1MTUgMCA1NC4wMzA5MDcgMTQuMjE4NjYgMTQuMjE4NjYgMzQuMTI0NzgzIDE0LjIxODY2IDQ4LjM0MzQ0MiAwIDM5LjgxMjI0Ny00Mi42NTU5NzkgNjIuNTYyMTAyLTk5LjUzMDYxOCA2Mi41NjIxMDMtMTYyLjA5Mjcycy0yMi43NDk4NTUtMTI1LjEyNDIwNS02Mi41NjIxMDMtMTYyLjA5MjcyeiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iMTEzNDYiPjwvcGF0aD48L3N2Zz4=";
    
    var qdprobotESP32_L2_PIN_Input_Dropdown = [
        ['.P1-L-36','P1L'],
        ['.P2-L-34','P2L'],
        ['.P7-L-15','P7L'],
        ['.P8-L-27','P8L'],
        ['.P9-L-12','P9L'],
        ['.P10-L-25','P10L'],
        ['P1-R-39','P1R'],
        ['P2-R-35','P2R'],
        ['P7-R-2','P7R'],
        ['P8-R-14','P8R'],
        ['P9-R-13','P9R'],
        ['P10-R-26','P10R']
    ];

    var qdprobotESP32_R2_PIN_Input_Dropdown = [
        ['.P1-R-39','P1R'],
        ['.P2-R-35','P2R'],
        ['.P7-R-2','P7R'],
        ['.P8-R-14','P8R'],
        ['.P9-R-13','P9R'],
        ['.P10-R-26','P10R'],
        ['P1-L-36','P1L'],
        ['P2-L-34','P2L'],
        ['P7-L-15','P7L'],
        ['P8-L-27','P8L'],
        ['P9-L-12','P9L'],
        ['P10-L-25','P10L']
    ];

    //光线
    Blockly.Blocks.qdp_esp32_lightSensor = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.qdp_esp32_lightSensor,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_lightSensor_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: qdprobotESP32_L2_PIN_Input_Dropdown
                    }
                ],
                "tooltip": "对光线强弱的感应，返回对应的模拟数值，\n亮数值变大，暗数值变小",
                colour: color_c02_sensor,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //声音
    Blockly.Blocks.qdp_esp32_sound = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.qdp_esp32_sound,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_sound_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: qdprobotESP32_R2_PIN_Input_Dropdown
                    }
                ],
                "tooltip": "对声音大小的感应，返回对应的模拟数值，\n周边噪声大值变大，相反变小",
                colour: color_c02_sensor,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;


