/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_Actuator_color = '#5874DC';
    const QH_RGB_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjM2MzMzMTY4MDk3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIwMDUxIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0zODQgMTAyNGEyMS40MTg2NjcgMjEuNDE4NjY3IDAgMCAxLTE1LjEwNC02LjIyOTMzM0wyNzcuMzMzMzMzIDkyNi4xNjUzMzNWMTAwMi42NjY2NjdhMjEuMzMzMzMzIDIxLjMzMzMzMyAwIDAgMS00Mi42NjY2NjYgMHYtMTI3Ljg3MlY3NDYuNjY2NjY3QTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEgMjU2IDcyNS4zMzMzMzNoNjRjNDcuMDYxMzMzIDAgODUuMzMzMzMzIDM4LjI3MiA4NS4zMzMzMzMgODUuMzMzMzM0cy0zOC4yNzIgODUuMzMzMzMzLTg1LjMzMzMzMyA4NS4zMzMzMzNoLTEyLjUwMTMzM2w5MS41NjI2NjYgOTEuNTYyNjY3QTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEgMzg0IDEwMjR6IG0tMTA2LjY2NjY2Ny0xNzAuNjY2NjY3aDQyLjY2NjY2N2E0Mi43MDkzMzMgNDIuNzA5MzMzIDAgMCAwIDAtODUuMzMzMzMzaC00Mi42NjY2Njd2ODUuMzMzMzMzek03NDYuNjY2NjY3IDEwMjRINjgyLjY2NjY2N2EyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAxLTIxLjMzMzMzNC0yMS4zMzMzMzN2LTI1NmEyMS4zMzMzMzMgMjEuMzMzMzMzIDAgMCAxIDIxLjMzMzMzNC0yMS4zMzMzMzRoNjRjNDcuMDYxMzMzIDAgODUuMzMzMzMzIDM4LjI3MiA4NS4zMzMzMzMgODUuMzMzMzM0IDAgMjUuNDcyLTExLjIyMTMzMyA0OC4zNDEzMzMtMjguOTcwNjY3IDY0IDE3Ljc0OTMzMyAxNS42NTg2NjcgMjguOTcwNjY3IDM4LjUyOCAyOC45NzA2NjcgNjQgMCA0Ny4wNjEzMzMtMzguMjcyIDg1LjMzMzMzMy04NS4zMzMzMzMgODUuMzMzMzMzeiBtLTQyLjY2NjY2Ny00Mi42NjY2NjdoNDIuNjY2NjY3YTQyLjcwOTMzMyA0Mi43MDkzMzMgMCAwIDAgMC04NS4zMzMzMzNoLTQyLjY2NjY2N3Y4NS4zMzMzMzN6IG0wLTEyOGg0Mi42NjY2NjdhNDIuNzA5MzMzIDQyLjcwOTMzMyAwIDAgMCAwLTg1LjMzMzMzM2gtNDIuNjY2NjY3djg1LjMzMzMzM3pNNTMzLjMzMzMzMyAxMDI0Yy00Ny4wNjEzMzMgMC04NS4zMzMzMzMtMzguMjcyLTg1LjMzMzMzMy04NS4zMzMzMzN2LTEyOGMwLTQ3LjA2MTMzMyAzOC4yNzItODUuMzMzMzMzIDg1LjMzMzMzMy04NS4zMzMzMzRzODUuMzMzMzMzIDM4LjI3MiA4NS4zMzMzMzQgODUuMzMzMzM0YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEtNDIuNjY2NjY3IDAgNDIuNzA5MzMzIDQyLjcwOTMzMyAwIDAgMC04NS4zMzMzMzMgMHYxMjhhNDIuNzA5MzMzIDQyLjcwOTMzMyAwIDAgMCA4NS4zMzMzMzMgMEg1NTQuNjY2NjY3YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEgMC00Mi42NjY2NjdoNDIuNjY2NjY2YTIxLjMzMzMzMyAyMS4zMzMzMzMgMCAwIDEgMjEuMzMzMzM0IDIxLjMzMzMzM3YyMS4zMzMzMzRjMCA0Ny4wNjEzMzMtMzguMjcyIDg1LjMzMzMzMy04NS4zMzMzMzQgODUuMzMzMzMzek0zODQgNjgyLjY2NjY2N2MtMTI5LjM2NTMzMyAwLTIzNC42NjY2NjctMTA1LjI1ODY2Ny0yMzQuNjY2NjY3LTIzNC42NjY2NjdTMjU0LjYzNDY2NyAyMTMuMzMzMzMzIDM4NCAyMTMuMzMzMzMzczIzNC42NjY2NjcgMTA1LjI1ODY2NyAyMzQuNjY2NjY3IDIzNC42NjY2NjdTNTEzLjM2NTMzMyA2ODIuNjY2NjY3IDM4NCA2ODIuNjY2NjY3ek0zODQgMjU2Yy0xMDUuODU2IDAtMTkyIDg2LjE0NC0xOTIgMTkyUzI3OC4xNDQgNjQwIDM4NCA2NDBzMTkyLTg2LjE0NCAxOTItMTkyUzQ4OS44NTYgMjU2IDM4NCAyNTZ6IiBwLWlkPSIyMDA1MiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik02NDAgNjgyLjY2NjY2N2MtMTI5LjM2NTMzMyAwLTIzNC42NjY2NjctMTA1LjI1ODY2Ny0yMzQuNjY2NjY3LTIzNC42NjY2NjdTNTEwLjYzNDY2NyAyMTMuMzMzMzMzIDY0MCAyMTMuMzMzMzMzczIzNC42NjY2NjcgMTA1LjI1ODY2NyAyMzQuNjY2NjY3IDIzNC42NjY2NjdTNzY5LjM2NTMzMyA2ODIuNjY2NjY3IDY0MCA2ODIuNjY2NjY3eiBtMC00MjYuNjY2NjY3Yy0xMDUuODU2IDAtMTkyIDg2LjE0NC0xOTIgMTkyUzUzNC4xNDQgNjQwIDY0MCA2NDBzMTkyLTg2LjE0NCAxOTItMTkyUzc0NS44NTYgMjU2IDY0MCAyNTZ6IiBwLWlkPSIyMDA1MyIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNDY5LjMzMzMzM2MtMTI5LjM2NTMzMyAwLTIzNC42NjY2NjctMTA1LjI1ODY2Ny0yMzQuNjY2NjY3LTIzNC42NjY2NjZTMzgyLjYzNDY2NyAwIDUxMiAwczIzNC42NjY2NjcgMTA1LjI1ODY2NyAyMzQuNjY2NjY3IDIzNC42NjY2NjdTNjQxLjM2NTMzMyA0NjkuMzMzMzMzIDUxMiA0NjkuMzMzMzMzeiBtMC00MjYuNjY2NjY2QzQwNi4xNDQgNDIuNjY2NjY3IDMyMCAxMjguODEwNjY3IDMyMCAyMzQuNjY2NjY3UzQwNi4xNDQgNDI2LjY2NjY2NyA1MTIgNDI2LjY2NjY2N3MxOTItODYuMTQ0IDE5Mi0xOTJTNjE3Ljg1NiA0Mi42NjY2NjcgNTEyIDQyLjY2NjY2N3oiIHAtaWQ9IjIwMDU0IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+";
    
    var qdprobotESP32_R_PIN_Output_Dropdown = [
        ['.P3-L-21（SDA）','P3L'],
        ['.P4-L-16','P4L'],
        ['.P5-L-18','P5L'],
        ['.P6-L-23','P6L'],
        ['.P7-L-15','P7L'],
        ['.P8-L-27','P8L'],
        ['.P9-L-12','P9L'],
        ['.P10-L-25','P10L'],
        ['P3-R-22（SCL）','P3R'],
        ['P4-R-17','P4R'],
        ['P5-R-5','P5R'],
        ['P6-R-19','P6R'],
        ['P7-R-2','P7R'],
        ['P8-R-14','P8R'],
        ['P9-R-13','P9R'],
        ['P10-R-26','P10R'],
    ];

    // RGB
    Blockly.Blocks.rgb_esp32_led = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.rgb_esp32_led,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_RGB_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN1',
                        options: qdprobotESP32_R_PIN_Output_Dropdown
                    },
                    {
                        type: 'input_value',
                        name: 'num8'
                    },
                    {
                        type: 'input_value',
                        name: 'num1'
                    },
                    {
                        type: 'input_value',
                        name: 'R'
                    },
                    {
                        type: 'input_value',
                        name: 'G'
                    },
                    {
                        type: 'input_value',
                        name: 'B'
                    }
                ],
                "tooltip": "RGB对应灯号颜色的值，灯号共4个，总灯数跟模块灯数相同，0为全部同时工作\n对应的值是代表第几个灯的，最大255，0为关",
                colour: QH_Actuator_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    // RGB2
    Blockly.Blocks.rgb_esp32_led2 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.rgb_esp32_led2,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_RGB_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN1',
                        options: qdprobotESP32_R_PIN_Output_Dropdown
                    },
                    {
                        type: 'input_value',
                        name: 'num8'
                    },
                    {
                        type: 'input_value',
                        name: 'num1'
                    },
                    {
                        type: 'input_value',
                        name: 'colour'
                    }
                ],
                "tooltip": "灯号共4个，总灯数跟模块灯数相同，0为全部同时工作",
                colour: QH_Actuator_color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;


