# chitin

![chitin](https://github.com/Scybin/chitin/blob/772c60d10595441565a0f650681d6e9988789062/images/chitin.png)

## 📚 Table of Contents

- [⚠️ Disclaimer](#disclaimer)
- [⌨️ Welcome](#welcome)
- [⚙️ Features](#features)
- [📊 Project Status](#project-status)
- [📦 Parts List](#parts-list)
- [🛠️ Build Guide](#build-guide)
- [💾 Firmware](#firmware)
- [📄 License](#license)

<a name="disclaimer"></a>
## ⚠️ Disclaimer

This project has reached the fully working prototype stage. All core features have been tested and function as intended. However, as with any DIY hardware project, you should carefully review all files before manufacturing or assembly. The author(s) cannot guarantee flawless operation in every environment or configuration.

The author(s) take no responsibility for any damage, issues, or legal trouble that might result from using this project (see the license). Be sure to follow local laws regarding radio frequencies and DIY electronics.

<a name="welcome"></a>
## ⌨️ Welcome

Chitin is a custom, open-source mechanical keyboard designed for ergonomic comfort, wireless functionality, and trackball. The design is built off my original keyboard design: scyboard, a minimal keyboard design.

<a name="features"></a>
## ⚙️ Features

- Ergonomic ortholinear layout
- ZMK firmware support
- USB-C connectivity & battery charging
- Bluetooth compatible
- Customizable keymaps, layers, and macros
- Trackball which can be programmed as a pointing device
- Layout is declared using Ergogen
- KiCad traces auto-routed using Freerouting
- Open source

<a name="project-status"></a>
## 📊 Project Status

The prototype design is complete. Waiting for hardware to build keyboard.

<a name="parts-list"></a>
## 📦 Parts List

*I am not sponsored or affiliated with the vendors linked below. This is where I prefer to purchase my products.*

| Part                      | Quantity | Description                                     | Purchase Link                                                                                                          | Datasheet                                                                                                                           |
|---------------------------|----------|-------------------------------------------------|----------------------------------------------------------------------------------------------------------------------- |-------------------------------------------------------------------------------------------------------------------------------------------|
| Microcontroller           |    2     | nice!nano v2.0                                  | [Nice Keyboarrds nice!nano v2.0](https://typeractive.xyz/products/no-solder-spring-headers?variant=47196312502503)     | [Nordic nRF52840](https://nicekeyboards.com/nice-nano)                                                                                    | 
| Pin Headers               |    4     | Controller socketing system (4mm)               | [MAC8 spring-loaded pin headers](https://www.littlekeyboards.com/products/spring-header-12-pin?variant=40197938675779) | [MAC8 spring-loaded pin headers specifications](https://www.mac8sdk.co.jp/uploads/entry_meta/file_value/1117/mac8_2018a_jp-xb2.pdf)       |
| Reset Button              |    2     | Panasonic miniature momentary button            | [Panasonic Reset Button](https://typeractive.xyz/products/reset-button)                                                | [EVQPUC02K](https://cdn.shopify.com/s/files/1/0618/5674/3655/files/PANASONIC-EVQPUC02K.pdf)                                               |
| Power Switch              |    2     | Alps miniature SPDT switch                      | [ALPS Powr Switch](https://typeractive.xyz/products/power-switch)                                                      | [SSSS811101](https://cdn.shopify.com/s/files/1/0618/5674/3655/files/ALPS-SSSS811101.pdf)                                                  |
| Battery Connector         |    2     | JST PH 2.0mm                                    | [JST Battery Jack](https://typeractive.xyz/products/battery-jack)                                                      | [JST_PH_S2B-PH-K_1x02_P2.00mm_Horizontal](http://www.jst-mfg.com/product/pdf/eng/ePH.pdf)                                                 |
| Battery                   |    2     | 3.7V LiPo 1200mAh (w/ JST adapter)              | [Lithium Ion Polymer Battery - 3.7v 1200mAh](https://www.adafruit.com/product/258)                                     | [301230](https://cdn-shop.adafruit.com/product-files/258/C101-_Li-Polymer_503562_1200mAh_3.7V_with_PCM_APPROVED_8.18.pdf)                 |
| Diode                     |    57    | SMD Diode                                       | [Semtech SMD Diodes](https://typeractive.xyz/products/smd-diodes)                                                      | [SOD-123](https://www.onsemi.com/download/data-sheet/pdf/mmsd301t1-d.pdf)      									                          |
| Hotswap Socket            |    57    | Kailh MX PCB Socket                             | [Kailh Hotswap Sockets](https://typeractive.xyz/products/hotswap-sockets)                                              | [CPG151101S11](https://www.kailhswitch.com/Content/upload/pdf/202215927/CPG151101S11-16.pdf?rnd=181)                                      |
| MX Switch                 |    57    | JWICK Linear Switches                           | [JWK JWICK Linear Switches](https://typeractive.xyz/products/jwk-jwick-linear-switches)                                | [MX Series Keyswitch](https://cdn.sparkfun.com/datasheets/Components/Switches/MX%20Series.pdf)                                            |
| MX Keycap                 |    57    | 55 x 1u, 2 x 1.5u                               | [DSA Keycaps](https://typeractive.xyz/products/dsa-keycaps)                                                            | [DSA Keycap Project](https://drive.google.com/drive/folders/0B0LNjZf_tzjWZGhwZ0VKUm9PQVE?resourcekey=0-rYUAMYD1-22Btlgdmpb0IQ)            |
| M2x15 Standoff            |    18    | Standoffs for plate                             | [Newark M2x15 Standoff](https://www.newark.com/wurth-elektronik/970150244/standoff-brass-hex-f-f-m2-15mm/dp/46AJ4338)  | [Farnell Datasheet](https://www.farnell.com/cad/3209262.pdf)                                                                              |
| M2x4 Screw                |    8     | Screws to connect bottom case to top case       | [CO-RODE Screw Kit](https://www.amazon.com/gp/product/B01FTI8TM8/)                                                     |                                                                                                                                           |
| M2x6 Screw                |    18    | Screws for bottom case and top plate            | [CO-RODE Screw Kit](https://www.amazon.com/gp/product/B01FTI8TM8/)                                                     |                                                                                                                                           |
| M2.5x8 Screw              |    4     | Screws to hold trackball in top case            | [CO-RODE Screw Kit](https://www.amazon.com/gp/product/B01FTI8TM8/)                                                     |                                                                                                                                           |
| M2x3 Insert Nut           |    8     | Inserts for top cases                           | [uxcell Knurled Insert Nuts](https://www.amazon.com/dp/B07LBQFNQD?th=1)                                                |                                                                                                                                           |
| M2.5x2 Nut                |    4     | Nuts to hold trackball in top case              | [Newark M2.5 Hex Nuts](https://www.newark.com/tr-fastenings/m2-5-hfst-z100/full-nut-steel-bzp-m2-5/dp/53M8595)         | [Farnell Datasheet](https://www.farnell.com/datasheets/2644739.pdf)                                                                       |
| Trackball Breakout        |    1     | Pimoroni RGBW Trackball Breakout                | [Trackball Breakout by Pimoroni](https://shop.pimoroni.com/products/trackball-breakout?variant=27672765038675)         | [Trackball Dimensions](https://cdn.shopify.com/s/files/1/0174/1800/files/trackballbreakout.png?v=1599645804)                              |
| Qwiic Connector           |    1     | JST SH 4-pin Right Angle Connector              | [JST SH 4-pin Right Angle Connector (10-pack) - Qwiic Compatible](https://www.adafruit.com/product/4208)               | [KAWEEI TECHNOLOGY 1.0MM WAFER 90 SMT TYPE REEL PACKAGE](https://cdn-shop.adafruit.com/product-files/4208/4208_Kaweei_C13396_diagram.pdf) |
| Bottom Case               |    2     | 3D printed bottom case                          | [Case Files Found Here](https://github.com/Scybin/chitin/tree/master/3d)                                               |                                                                                                                                           |
| Top Case                  |    2     | 3D printed top case (tb case for trackball)     | [Case Files Found Here](https://github.com/Scybin/chitin/tree/master/3d)                                               |                                                                                                                                           | 

**NOTE: The trackball replaces the position of 1 switch from the keyboard layout. If not incorporating a trackball in the build, add 1 quantity to each of the following parts:**
- Diode
- Hotswap Socket
- MX Switch
- 1u MX Keycap

<a name="build-guide"></a>
## 🛠️ Build Guide

TODO

<a name="firmware"></a>
## 💾 Firmware

To get started, I recommend forking my personal repository for chitin. Making modifications to the keyboard can be done within the config folder. 

My build sets the central device to the right half of the keyboard, and the peripheral to the left half. Making changes to which half the trackball resides on, or excluding the trackball from the build requires many changes to the code in the chitin repository and source module.

The repository uses my chitin ZMK module [HERE](https://github.com/Scybin/zmk-keyboard-chitin), and my Pimoroni trackball driver module (derived from mwandzik's driver) [HERE](https://github.com/Scybin/zmk-driver-pim447).

<a name="license"></a>
## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
