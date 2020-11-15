///api_version=2
(script = registerScript({
    name: "NoRotate",
    authors: ["CzechHek"],
    version: "1.0"
})).import("DreamsCore.lib");

module = {
    category: "Misc",
    description: "NoRotate for any AntiCheat.",
    onPacket: function (e) {
        if (mc.thePlayer && e.getPacket() instanceof SPacketPlayerPosLook) {
            yawField.set(e.getPacket(), mc.thePlayer.rotationYaw);
            pitchField.set(e.getPacket(), mc.thePlayer.rotationPitch);
        }
    }
}

yawField = getField(SPacketPlayerPosLook, "field_148936_d");
pitchField = getField(SPacketPlayerPosLook, "field_148937_e");