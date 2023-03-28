/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
    	CADA_BLE05_CATEGORY: 'basis',
    	BLE05_setPinMode: 'set pin %1 mode %2',
    	modeMenu_input: 'input',
    	modeMenu_output: 'output',
    	modeMenu_inputPullup: 'input-pullup',
    	BLE05_setPinOutput: 'set pin %1 out %2',
		levelMenu_high: 'high',
		levelMenu_low: 'low',
		BLE05_setPwmOutput: 'set port %1 pulse %2',
    	BLE05_setServoOutput: 'set port %1 servo %2',
    	BLE05_setLEDState: 'set status lamp out %1',
    	BLE05_readDigitalPin: 'read pin %1 digital',
    	BLE05_readButtonState: 'when button %1 is pressed',
		button_left: 'left',
		button_center: 'center',
		button_right: 'right',
		BLE05_readAnalogPort: 'read port %1 analog',
		BLE05_attachInterrupt: 'attach interrupt pin %1 mode %2 executes',
		BLE05_detachInterrupt: 'detach interrupt pin %1',
		interrupMode_rising: 'rising edge',
		interrupMode_falling: 'falling edge',
		interrupMode_change: 'change edge',
		interrupMode_low: 'low'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
		CADA_BLE05_CATEGORY: '基础',
    	BLE05_setPinMode: '设置引脚 %1 模式为 %2',
    	modeMenu_input: '输入',
    	modeMenu_output: '输出',
    	modeMenu_inputPullup: '输入上拉',
    	BLE05_setPinOutput: '设置引脚 %1 输出为 %2',
		levelMenu_high: '高',
		levelMenu_low: '低',
		BLE05_setPwmOutput: '设置端口 %1 脉冲为 %2',
    	BLE05_setServoOutput: '设置端口 %1 舵机为 %2',
    	BLE05_setLEDState: '设置状态灯输出为 %1',
    	BLE05_readDigitalPin: '读取引脚 %1 数字量',
    	BLE05_readButtonState: '当按钮 %1 被按下',
		button_left: '左',
		button_center: '中',
		button_right: '右',
		BLE05_readAnalogPort: '读取端口 %1 模拟量',
		BLE05_attachInterrupt: '设置中断引脚 %1 模式 %2 执行',
		BLE05_detachInterrupt: '取消中断引脚 %1',
		interrupMode_rising: '上升沿',
		interrupMode_falling: '下降沿',
		interrupMode_change: '电平改变',
		interrupMode_low: '低电平'
    });
	Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
    });
    return Blockly;
}

exports = addMsg;
