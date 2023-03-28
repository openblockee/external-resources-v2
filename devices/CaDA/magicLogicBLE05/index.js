const magicLogicBLE05 = formatMessage => ({
    name: 'Magic Logic MASTER EDU',
    deviceId: 'magicLogicBLE05_magicLogicBLE05',
    manufactor: 'CaDA',
    learnMore: 'http://doc.cada-e.com/doku.php?id=magiclogicmasteredu',
    iconURL: 'asset/magicLogicBLE05.png',
    description: formatMessage({
        id: 'magicLogicBLE05.description',
        default: 'Classic programmable controller, has good scalability.'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '57600',
    pnpidList: [
        'USB\\VID_2341&PID_0043',
        'USB\\VID_2341&PID_0001',
        'USB\\VID_2A03&PID_0043',
        'USB\\VID_2341&PID_0243',
        // For chinese clones that use CH340
        'USB\\VID_1A86&PID_7523'
    ],
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/magicLogicBLE05-illustration.svg',
    connectionSmallIconURL: 'asset/magicLogicBLE05-small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['arduino'],
    deviceExtensions: ['arduinoMagicLogicBLE05'],
    deviceExtensionsCompatible: 'magicLogicBLE05',
    helpLink: 'http://doc.cada-e.com/doku.php?id=magiclogicmasteredu'
});

module.exports = magicLogicBLE05;
