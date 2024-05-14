const lineFinderRobotCaDA = formatMessage => ({
    name: formatMessage({
        id: 'lineFinderCaDA.name',
        default: 'Line Finder'
    }),
    extensionId: 'lineFinderCaDA',
    version: '1.0.1',
    supportDevice: ['magicLogicBLE06'],
    author: 'CaDA',
    iconURL: `asset/lineFinderCaDA.png`,
    description: formatMessage({
        id: 'lineFinderCaDA.description',
        default: 'Dual-path robot line patrol car application.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['kit'],
    helpLink: 'http://doc.cada-e.com/doku.php?id=caturbot_lfr'
});

module.exports = lineFinderRobotCaDA;
