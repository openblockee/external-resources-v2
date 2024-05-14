const remoteControlCaDA = formatMessage => ({
    name: formatMessage({
        id: 'remoteControlCaDA.name',
        default: 'Remoter Control'
    }),
    extensionId: 'remoteControlCaDA',
    version: '1.0.0',
    supportDevice: ['magicLogicBLE06'],
    author: 'CaDA',
    iconURL: `asset/remoteControlCaDA.png`,
    description: formatMessage({
        id: 'remoteControlCaDA.description',
        default: 'Communication with programmable controllers.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['communication'],
    helpLink: 'http://doc.cada-e.com/doku.php?id=product_ble04cn'
});

module.exports = remoteControlCaDA;
