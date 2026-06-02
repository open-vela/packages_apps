# packages_apps Overview

\[ English | [简体中文](README_zh-cn.md) \]

`packages_apps` contains Quick App (JS application) example projects built on openvela, organized by device form factor. The tech stack is [Xiaomi Vela QuickJS](https://iot.mi.com/vela/quickapp/zh/guide/), covering both first-party system apps and third-party app examples for developers to learn from.

The Quick Apps in this repository target the **openvela emulator** (NuttX environment), which is closer to real-device behavior. **In the AI Hardware Contest, Quick App track submissions are committed to this repository.**

> Note: Difference from [packages_fe_examples](../../../../open-vela/packages_fe_examples):
> - **packages_apps (this repo)**: Runs Quick Apps on the openvela emulator; contest code **is committed here**.
> - **packages_fe_examples**: Runs Quick Apps in the AIoT IDE built-in emulator, for learning reference only; contest code is **not committed** there.

## Directory Structure

| Directory | Description |
| --------- | ----------- |
| [smartspeaker](./smartspeaker) | Quick App examples for Xiaomi smart speaker devices (system and third-party apps). |
| [wearable](./wearable) | Quick App examples for Xiaomi wearable devices, including system apps such as Launcher and Settings, and third-party apps such as Calendar, Calculator, Player, To-do, and mini-games. |
| [common](./common) | Shared resources and components used across apps. |

## Quick Start

Each example project is built with the `aiot` toolchain. The general steps are as follows (using a single app directory as an example):

```bash
# Install dependencies
npm install

# Build (produces a Quick App package that runs on the openvela emulator)
npm run build
```

Scripts may vary slightly between examples; refer to the `package.json` and `README.md` in each app directory.

## Related Documentation

- Quick App development guide: [Xiaomi Vela Quick App Documentation](https://iot.mi.com/vela/quickapp/zh/guide/)
