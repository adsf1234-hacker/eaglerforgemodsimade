ModAPI.require('player');

function onload() {
    if (Boolean(ModAPI.player ? (ModAPI.player.isPlayer() ? true : false) : false)) {
        ModAPI.displayToChat({
            msg: 'Hacks.'
        });
    };
}
onload();
