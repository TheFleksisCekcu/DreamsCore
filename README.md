## Introduction
DreamsCore is a coding base for minecraft's client LiquidBounce (https://liquidbounce.net/), that significantly simplifies coding via LB's ScriptAPI, without losing any of its features.
It's suitable for anyone, from complete beginners to experienced coders.

## Why should I use it?
When you make a variety of scripts, you waste your precious time doing unimportant things in the code. These actions are much easier and faster to do with Core.
It has integrated utilities that anyone can use, so you don't have to make them yourself. It also imports many classes so you don't have to import them manually.
It autogenerates help command and prints all possible subcommands (configurable).
If modules category doesn't exist, DreamsCore will create it automatically, adding tabs to TabGUI and ClickGUI. You can make scripts stand out by that.

Examples: https://github.com/TheFleksisCekcu/DreamsCore/tree/master/Scripts.

## About DreamsCore
So, its inspired by CzechHek's Core.lib.
Also, it contains some custom turtlCore's functions.
Also, DreamsCore is FULLY compatible with cross-version and LiquidBounce 1.12.2 b73

## Importing
DreamsCore automatically imports:
* net.minecraft.block.* (blocks)
* net.minecraft.client.gui.* (guis)
* net.minecraft.entity.* (entities)
* net.minecraft.init.* (blocks, items)
* net.minecraft.item.* (items)
* net.minecraft.network.* (packets+)
* net.minecraft.util.* (mc utils)
* net.ccbluex.liquidbounce.utils.* (lb utils)
* net.ccbluex.liquidbounce.api.* (NO MINECRAFT DIR IMPORTING) (cross-version utils and etc...)
* net.ccbluex.liquidbounce.api.minecraft.util.* (cross-version minecraft utils)
* net.ccbluex.liquidbounce.value.* (lb values)

## Cross-version compability
A lot of CzechHek's core.lib scripts are perfectly working, but they need to be ported.
Instruction, how to port:

* Change packets name in script. (Example: From C03PacketPlayer -> CPacketPlayer, 
* S08PacketPlayerPosLook -> SPacketPlayerPosLook, C0BPacketEntityAction -> CPacketEntityAction)
* Fix import of core. (...})).import("Core.lib"); change to ...})).import("DreamsCore.lib");)
* Done(???)

...and other custom function utilities, that not contains in core.lib...

With ❤️, by TheFleksisCekcu. 

