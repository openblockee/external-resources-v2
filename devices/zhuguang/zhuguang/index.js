const Zhuguang = formatMessage => ({
    name: formatMessage({
        id: 'zhuguang.name',
        default: 'Candle Light'
    }),
    deviceId: 'Zhuguang_arduinoEsp32',
    manufactor: '',
    learnMore: 'https://www.stvs.org.cn/c/2021-05-11/3178367.shtml',
    iconURL: 'asset/zhuguang.png',
    description: formatMessage({
        id: 'zhuguang.description',
        default: 'Special equipment for candlelight education.'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/zhuguang-illustration.svg',
    connectionSmallIconURL: 'asset/zhuguang-small.svg',
    programMode: ['upload'],
    defaultProgramMode: 'upload',
    programLanguage: ['block', 'cpp'],
    tags: ['arduino', 'kit'],
    deviceExtensions: ['Zhuguang'],
    deviceExtensionsCompatible: 'arduinoEsp32',
    helpLink: ''
});

module.exports = Zhuguang;
