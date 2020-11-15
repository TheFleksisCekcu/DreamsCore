///api_version=2
(script = registerScript({
    name: "PhaseFall",
    authors: ["CzechHek"],
    version: "1.3"
})).import("DreamsCore.lib");

module = {
    category: "Player",
    description: "NoFall using phase to negate damage. (inspired by yorik100)",
    values: stoplength = value.createInteger("StopLength", 200, 0, 1000),
    onPacket: function (e) {
        if (e.getPacket() instanceof CPacketPlayer && e.getPacket().isMoving()) {
            if (e.getPacket().onGround) {
                if (hurts) {
                    e.getPacket().y -= 0.0625 + 1e-14;
                    willFlag = !(hurts = e.getPacket().onGround = mc.getNetHandler().addToSendQueue(new CPacketPlayer.Position(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false)));
                    timeout(stoplength.get(), function () willFlag = false);
                }
            } else hurts = mc.thePlayer.fallDistance > 3.4;
        } else if (willFlag && e.getPacket() instanceof SPacketPlayerPosLook) e.cancelEvent();
    },
    onMove: function (e) {
        willFlag && e.zero();
    }
}

var willFlag, hurts;