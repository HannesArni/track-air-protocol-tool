const asdf = [
  {
    "commands": [
      {
        "type": "ACK",
        "command": "GTXXX",
        "description": "General acknowledge",
        "raw": "+ACK:GTXXX"
      }
    ],
    "params": [
      "protocolVersion",
      "uniqueId",
      "deviceName",
      "reserved",
      "serialNumber",
      "generatedTime",
      "countNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "ACK",
        "command": "GTRTO",
        "description": "Real time operation acknowledge",
        "raw": "+ACK:GTRTO"
      }
    ],
    "params": [
      "protocolVersion",
      "uniqueId",
      "deviceName",
      "reserved",
      "subCommand",
      "serialNumber",
      "generatedTime",
      "countNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "ACK",
        "command": "GTHBD",
        "description": "Heartbeat Report",
        "raw": "+ACK:GTHBD"
      }
    ],
    "params": [
      "protocolVersion",
      "uniqueId",
      "deviceName",
      "bleCommandPassword",
      "generatedTime",
      "countNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "SACK",
        "command": "GTHBD",
        "description": "Server Acknowledgement for Heartbeat",
        "raw": "+SACK:GTHBD"
      }
    ],
    "params": [
      "protocolVersion",
      "countNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "SACK",
        "command": "11F0",
        "description": "Server acknowledgement for report",
        "raw": "+SACK:11F0"
      }
    ],
    "params": [
      "countNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "AT",
        "command": "GTTMA",
        "description": "Time Adjustment",
        "raw": "AT+GTTMA"
      }
    ],
    "params": [
      "password",
      "sign",
      "hourOffset",
      "minuteOffset",
      "daylightSaving",
      "utcTime",
      "reserved",
      "reserved",
      "reserved",
      "reserved",
      "serialNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "AT",
        "command": "GTQSS",
        "description": "Network Configuration",
        "raw": "AT+GTQSS"
      }
    ],
    "params": [
      "password",
      "apn",
      "apnUserName",
      "apnPassword",
      "reportMode",
      "networkMode",
      "enableBuffer",
      "mainServerIp",
      "mainServerPort",
      "lteMode",
      "region",
      "reserved",
      "heartbeatInterval",
      "enableSack",
      "enableBleUnlock",
      "bleBroadcastName",
      "serialNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "AT",
        "command": "GTIPN",
        "description": "Firmware Upgrade Server Switch",
        "raw": "AT+GTIPN"
      }
    ],
    "params": [
      "password",
      "switchEnable",
      "mainServerIp",
      "mainServerPort",
      "reserved",
      "reserved",
      "reserved",
      "reserved",
      "reserved",
      "reserved",
      "serialNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "AT",
        "command": "GTDOG",
        "description": "Software Watchdog Setting",
        "raw": "AT+GTDOG"
      }
    ],
    "params": [
      "password",
      "mode",
      "reserved",
      "interval",
      "time",
      "reserved",
      "reportBeforeReboot",
      "unit",
      "noNetworkInterval",
      "noActivationInterval",
      "sendFailTimeout",
      "reserved",
      "reserved",
      "reserved",
      "reserved",
      "reserved",
      "serialNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "AT",
        "command": "GTFRI",
        "description": "Fixed Report Information",
        "raw": "AT+GTFRI"
      }
    ],
    "params": [
      "password",
      "mode",
      "discardNoFix",
      "lockSendInterval",
      "unlockSendInterval",
      "backupSendInterval",
      "reserved",
      "reserved",
      "reserved",
      "reserved",
      "serialNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "RESP",
        "command": "GTFRI",
        "description": "Fix Time Report",
        "raw": "+RESP:GTFRI"
      }
    ],
    "params": [
      "protocolVersion",
      "uniqueId",
      "deviceName",
      "vin",
      "qrCode",
      "reserved",
      "reserved",
      "reportType",
      "ecuErrorCode",
      "gpsAccuracy",
      "speed",
      "azimuth",
      "altitude",
      "longitude",
      "latitude",
      "gpsUtcTime",
      "reserved",
      "mcc",
      "mnc",
      "lac",
      "cellId",
      "csq",
      "networkType",
      "state",
      "powerSupply",
      "mainPowerVoltage",
      "backupBatteryVoltage",
      "backupBatteryPercentage",
      "ecuErrorType",
      "alive",
      "ecuLockState",
      "taskId",
      "ecuInfo",
      "scooterBatteryPercentage",
      "generatedTime",
      "countNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "AT",
        "command": "GTNMD",
        "description": "Movement Detection Configuration",
        "raw": "AT+GTNMD"
      }
    ],
    "params": [
      "password",
      "non",
      "movementDuration",
      "sensitivityLevel",
      "reserved",
      "reserved",
      "reserved",
      "reserved",
      "reserved",
      "serialNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "AT",
        "command": "GTALM",
        "description": "Continuous Vibration Alarm",
        "raw": "AT+GTALM"
      }
    ],
    "params": [
      "password",
      "continuousVibrationAlarm",
      "alarmInterval",
      "reserved",
      "reserved",
      "reserved",
      "serialNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "AT",
        "command": "GTECC",
        "description": "ECU Parameters Configuration (OKAI ES200ES300ES400)",
        "raw": "AT+GTECC"
      }
    ],
    "params": [
      "password",
      "reserved",
      "maximumSpeedLimit",
      "speedUpMode",
      "displayUnit",
      "reserved",
      "reserved",
      "reserved",
      "reserved",
      "reserved",
      "serialNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "AT",
        "command": "GTECC",
        "description": "ECU Parameters Configuration (OKAI ES200ES300ES400)",
        "raw": "AT+GTECC"
      }
    ],
    "params": [
      "password",
      "reserved",
      "maximumSpeedLimit",
      "speedUpMode",
      "displayUnit",
      "reserved",
      "reserved",
      "reserved",
      "reserved",
      "reserved",
      "serialNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "AT",
        "command": "GTCFG",
        "description": "Global Configuration",
        "raw": "AT+GTCFG"
      }
    ],
    "params": [
      "password",
      "newPassword",
      "deviceName",
      "gpsOnNeed",
      "filtrateTheGpsDataTime",
      "agpsMode",
      "reserved",
      "reportItemMask",
      "eventMask",
      "reserved",
      "reserved",
      "backupVoicePlayEnable",
      "powerOffEnable",
      "voicePlayEnable",
      "volume",
      "alarmVolume",
      "serialNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "AT",
        "command": "GTLED",
        "description": "LED Setting",
        "raw": "AT+GTLED"
      }
    ],
    "params": [
      "password",
      "greenLedToIndicateThe",
      "ledWorkMode",
      "ledBlinkFrequency",
      "reserved",
      "reserved",
      "reserved",
      "reserved",
      "reserved",
      "reserved",
      "serialNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "AT",
        "command": "GTVAD",
        "description": "Configuration",
        "raw": "AT+GTVAD"
      }
    ],
    "params": [
      "password",
      "mechanicalLockEnable",
      "electronicBellEnable",
      "requestToStopServiceEnable",
      "nfcWorkMode",
      "scooterBatteryHeating",
      "mechanicalLockType",
      "reserved",
      "serialNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "AT",
        "command": "GTNFC",
        "description": "NFC Tag ID Setting",
        "raw": "AT+GTNFC"
      }
    ],
    "params": [
      "password",
      "reserved",
      "tagIdSelection",
      "tagIdString",
      "reserved",
      "reserved",
      "reserved",
      "serialNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "AT",
        "command": "GTBCP",
        "description": "BLE Command Password Setting",
        "raw": "AT+GTBCP"
      }
    ],
    "params": [
      "password",
      "reserved",
      "passwordTypeSelection",
      "staticPasswordString",
      "reserved",
      "reserved",
      "reserved",
      "serialNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "RESP",
        "command": "GTMLS",
        "description": "Mechanical Lock Status Change",
        "raw": "+RESP:GTMLS"
      },
      {
        "type": "RESP",
        "command": "GTRSS",
        "description": "Request to Stop Service",
        "raw": "+RESP:GTRSS"
      }
    ],
    "params": [
      "protocolVersion",
      "uniqueId",
      "deviceName",
      "vin",
      "qrCode",
      "reserved",
      "reserved",
      "reportType",
      "powerSupply",
      "mainPowerVoltage",
      "backupBatteryVoltage",
      "backupBatteryPercentage",
      "ecuLockState",
      "mechanicalLockState",
      "reserved",
      "reserved",
      "generatedTime",
      "countNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "AT",
        "command": "GTRTO",
        "description": "Real Time Operation",
        "raw": "AT+GTRTO"
      }
    ],
    "params": [
      "password",
      "subCommand",
      "reserved",
      "parameter",
      "taskId",
      "configurationCommand",
      "sendingUtcTime",
      "expireTime",
      "reserved",
      "serialNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "RESP",
        "command": "GTQRY",
        "description": "RTO.QUERY",
        "raw": "+RESP:GTQRY"
      },
      {
        "type": "RESP",
        "command": "GTINF",
        "description": "RTO.INF",
        "raw": "+RESP:GTINF"
      },
      {
        "type": "RESP",
        "command": "GTRTL",
        "description": "RTO.RTL",
        "raw": "+RESP:GTRTL"
      }
    ],
    "params": [
      "protocolVersion",
      "uniqueId",
      "deviceName",
      "vin",
      "qrCode",
      "reserved",
      "reserved",
      "reserved",
      "ecuErrorCode",
      "gpsAccuracy",
      "speed",
      "azimuth",
      "altitude",
      "longitude",
      "latitude",
      "gpsUtcTime",
      "reserved",
      "mcc",
      "mnc",
      "lac",
      "cellId",
      "csq",
      "networkType",
      "state",
      "powerSupply",
      "mainPowerVoltage",
      "backupBatteryVoltage",
      "backupBatteryPercentage",
      "ecuErrorType",
      "alive",
      "ecuLockState",
      "taskId",
      "ecuInfo",
      "scooterBatteryPercentage",
      "generatedTime",
      "countNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "RESP",
        "command": "GTALS",
        "description": "RTO.READ",
        "raw": "+RESP:GTALS"
      }
    ],
    "params": [
      "protocolVersion",
      "uniqueId",
      "deviceName",
      "vin",
      "qrCode",
      "reserved",
      "taskId",
      "fri"
    ]
  },
  {
    "commands": [
      {
        "type": "RESP",
        "command": "GTALC",
        "description": "RTO.READ",
        "raw": "+RESP:GTALC"
      }
    ],
    "params": [
      "protocolVersion",
      "uniqueId",
      "deviceName",
      "vin",
      "qrCode",
      "reserved",
      "taskId",
      "configurationMask",
      "qss",
      "apn",
      "apnUserName",
      "apnPassword",
      "reportMode",
      "networkMode",
      "enableBuffer",
      "mainServerIp",
      "mainServerPort",
      "lteMode",
      "region",
      "reserved",
      "heartbeatInterval",
      "enableSack",
      "enableBleUnlock",
      "bleBroadcastName",
      "cfg",
      "newPassword",
      "deviceName",
      "gpsOnNeed",
      "filtrateTheGpsDataTime",
      "agpsMode",
      "reserved",
      "reportItemMask",
      "eventMask",
      "reserved",
      "reserved",
      "backupVoicePlayEnable",
      "powerOffEnable",
      "voicePlayEnable",
      "volume",
      "alarmVolume",
      "tma",
      "sign",
      "hourOffset",
      "minuteOffset",
      "daylightSaving",
      "utcTime",
      "reserved",
      "reserved",
      "reserved",
      "reserved",
      "fri",
      "mode",
      "discardNoFix",
      "lockSendInterval",
      "unlockSendInterval",
      "backupSendInterval",
      "reserved",
      "reserved",
      "reserved",
      "reserved",
      "dog",
      "mode",
      "reserved",
      "interval",
      "time",
      "reserved",
      "reportBeforeReboot",
      "unit",
      "noNetworkInterval",
      "noActivationInterval",
      "sendFailTimeout",
      "reserved",
      "reserved",
      "reserved",
      "reserved",
      "reserved",
      "nmd",
      "non",
      "movementDuration",
      "sensitivityLevel",
      "reserved",
      "reserved",
      "reserved",
      "reserved",
      "reserved",
      "alm",
      "continuousVibrationAlarm",
      "alarmInterval",
      "reserved",
      "reserved",
      "reserved",
      "ecc",
      "reserved",
      "maximumSpeedLimit",
      "speedUpMode",
      "displayUnit",
      "reserved",
      "reserved",
      "reserved",
      "reserved",
      "reserved",
      "led",
      "greenLedToIndicateThe",
      "ledWorkMode",
      "ledBlinkFrequency",
      "reserved",
      "reserved",
      "reserved",
      "reserved",
      "reserved",
      "reserved",
      "ipn",
      "switchEnable",
      "mainServerIp",
      "mainServerPort",
      "reserved",
      "reserved",
      "reserved",
      "reserved",
      "reserved",
      "reserved",
      "vad",
      "mechanicalLockEnable",
      "electronicBellEnable",
      "requestToStopServiceEnable",
      "nfcWorkMode",
      "scooterBatteryHeating",
      "mechanicalLockType",
      "reserved",
      "nfc",
      "reserved",
      "tagIdSelection",
      "tagIdString",
      "reserved",
      "reserved",
      "reserved",
      "bcp",
      "reserved",
      "passwordTypeSelection",
      "staticPasswordString",
      "reserved",
      "reserved",
      "reserved",
      "generatedTime",
      "countNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "RESP",
        "command": "GTCID",
        "description": "RTO.CID",
        "raw": "+RESP:GTCID"
      }
    ],
    "params": [
      "protocolVersion",
      "uniqueId",
      "deviceName",
      "vin",
      "qrCode",
      "reserved",
      "taskId",
      "iccid",
      "generatedTime",
      "countNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "RESP",
        "command": "GTVER",
        "description": "RTO.VER",
        "raw": "+RESP:GTVER"
      }
    ],
    "params": [
      "protocolVersion",
      "uniqueId",
      "deviceName",
      "vin",
      "qrCode",
      "reserved",
      "deviceType",
      "firmwareVersion",
      "hardwareVersion",
      "modemHardwareVersion",
      "modemSoftwareVersion",
      "bluetoothFirmwareVersion",
      "scooterHardwareVersion",
      "scooterFirmwareVersion",
      "reserved",
      "taskId",
      "generatedTime",
      "countNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "RESP",
        "command": "GTSPD",
        "description": "RTO.SPDSTA",
        "raw": "+RESP:GTSPD"
      }
    ],
    "params": [
      "protocolVersion",
      "uniqueId",
      "deviceName",
      "vin",
      "qrCode",
      "reserved",
      "taskId",
      "throttleStatus",
      "generatedTime",
      "countNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "AT",
        "command": "GTRES",
        "description": "Reservation Service Command",
        "raw": "AT+GTRES"
      }
    ],
    "params": [
      "password",
      "reservationEnable",
      "reservationTime",
      "reserved",
      "reserved",
      "reserved",
      "reserved",
      "serialNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "RESP",
        "command": "GTRES",
        "description": "Reservation Event Report",
        "raw": "+RESP:GTRES"
      }
    ],
    "params": [
      "protocolVersion",
      "uniqueId",
      "deviceName",
      "vin",
      "qrCode",
      "reserved",
      "reserved",
      "reportType",
      "powerSupply",
      "mainPowerVoltage",
      "backupBatteryVoltage",
      "backupBattery",
      "ecuLockState",
      "mechanicalLockState",
      "reserved",
      "reserved",
      "generatedTime",
      "countNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "RESP",
        "command": "GTWLC",
        "description": "Wireless Charging Event Report",
        "raw": "+RESP:GTWLC"
      }
    ],
    "params": [
      "protocolVersion",
      "uniqueId",
      "deviceName",
      "vin",
      "qrCode",
      "reserved",
      "reserved",
      "reportType",
      "powerSupply",
      "mainPowerVoltage",
      "backupBatteryVoltage",
      "backupBattery",
      "ecuLockState",
      "mechanicalLockState",
      "reserved",
      "reserved",
      "generatedTime",
      "countNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "RESP",
        "command": "GTPNL",
        "description": "Power on Fixed Report",
        "raw": "+RESP:GTPNL"
      },
      {
        "type": "RESP",
        "command": "GTCFU",
        "description": "ECU Error Code Update",
        "raw": "+RESP:GTCFU"
      },
      {
        "type": "RESP",
        "command": "GTLOR",
        "description": "ECU Lock Locking Request",
        "raw": "+RESP:GTLOR"
      },
      {
        "type": "RESP",
        "command": "GTLOC",
        "description": "ECU Lock Locking Successful",
        "raw": "+RESP:GTLOC"
      },
      {
        "type": "RESP",
        "command": "GTLOF",
        "description": "ECU Lock Locking Failed",
        "raw": "+RESP:GTLOF"
      },
      {
        "type": "RESP",
        "command": "GTULS",
        "description": "ECU Lock Unlocking Successful",
        "raw": "+RESP:GTULS"
      },
      {
        "type": "RESP",
        "command": "GTULF",
        "description": "ECU Lock Unlocking Failed",
        "raw": "+RESP:GTULF"
      },
      {
        "type": "RESP",
        "command": "GTCSD",
        "description": "ECU Abnormal Shutdown",
        "raw": "+RESP:GTCSD"
      },
      {
        "type": "RESP",
        "command": "GTCFL",
        "description": "ECU Firmware Lost",
        "raw": "+RESP:GTCFL"
      },
      {
        "type": "RESP",
        "command": "GTEPN",
        "description": "Main Power Supply",
        "raw": "+RESP:GTEPN"
      },
      {
        "type": "RESP",
        "command": "GTEPF",
        "description": "Backup Power Supply",
        "raw": "+RESP:GTEPF"
      },
      {
        "type": "RESP",
        "command": "GTPNA",
        "description": "Power on",
        "raw": "+RESP:GTPNA"
      },
      {
        "type": "RESP",
        "command": "GTPFA",
        "description": "Power off",
        "raw": "+RESP:GTPFA"
      },
      {
        "type": "RESP",
        "command": "GTSCE",
        "description": "Scooter Battery Starts Charging",
        "raw": "+RESP:GTSCE"
      },
      {
        "type": "RESP",
        "command": "GTPCE",
        "description": "Scooter Battery Stops Charging",
        "raw": "+RESP:GTPCE"
      },
      {
        "type": "RESP",
        "command": "GTBTC",
        "description": "Backup Battery Starts Charging",
        "raw": "+RESP:GTBTC"
      },
      {
        "type": "RESP",
        "command": "GTSTC",
        "description": "Backup Battery Stops Charging",
        "raw": "+RESP:GTSTC"
      },
      {
        "type": "RESP",
        "command": "GTBPL",
        "description": "Backup Battery Low",
        "raw": "+RESP:GTBPL"
      },
      {
        "type": "RESP",
        "command": "GTALI",
        "description": "RTO.ALIVE",
        "raw": "+RESP:GTALI"
      },
      {
        "type": "RESP",
        "command": "GTNCN",
        "description": "New Connection to Backend Server",
        "raw": "+RESP:GTNCN"
      },
      {
        "type": "RESP",
        "command": "GTDOG",
        "description": "Device Reboot for Watchdog",
        "raw": "+RESP:GTDOG"
      },
      {
        "type": "RESP",
        "command": "GTSTT",
        "description": "Device Motion State Change",
        "raw": "+RESP:GTSTT"
      },
      {
        "type": "RESP",
        "command": "GTBOV",
        "description": "Scooter Overturned",
        "raw": "+RESP:GTBOV"
      },
      {
        "type": "RESP",
        "command": "GTBRN",
        "description": "Scooter Recovered from Overturn",
        "raw": "+RESP:GTBRN"
      }
    ],
    "params": [
      "protocolVersion",
      "uniqueId",
      "deviceName",
      "vin",
      "qrCode",
      "reserved",
      "reserved",
      "reportType",
      "ecuErrorCode",
      "gpsAccuracy",
      "speed",
      "azimuth",
      "altitude",
      "longitude",
      "latitude",
      "gpsUtcTime",
      "reserved",
      "mcc",
      "mnc",
      "lac",
      "cellId",
      "csq",
      "networkType",
      "state",
      "powerSupply",
      "mainPowerVoltage",
      "backupBatteryVoltage",
      "backupBatteryPercentage",
      "ecuErrorType",
      "alive",
      "ecuLockState",
      "taskId",
      "ecuInfo",
      "scooterBatteryPercentage",
      "generatedTime",
      "countNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "AT",
        "command": "GTUPD",
        "description": "Start firmware update",
        "raw": "AT+GTUPD"
      }
    ],
    "params": [
      "password",
      "subCommand",
      "maxDownloadRetry",
      "downloadTimeout",
      "downloadProtocol",
      "reserved",
      "reserved",
      "downloadUrl",
      "audioFileParameter",
      "updateType",
      "reserved",
      "reserved",
      "serialNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "ACK",
        "command": "GTUPD",
        "description": "Acknowledge firmware update",
        "raw": "+ACK:GTUPD"
      }
    ],
    "params": [
      "protocolVersion",
      "uniqueId",
      "deviceName",
      "serialNumber",
      "sendTime",
      "countNumber"
    ]
  },
  {
    "commands": [
      {
        "type": "RESP",
        "command": "GTUPD",
        "description": "Update confirmation",
        "raw": "+RESP:GTUPD"
      }
    ],
    "params": [
      "protocolVersion",
      "uniqueId",
      "deviceName",
      "code",
      "downloadTimes",
      "sendTime",
      "countNumber"
    ]
  }
]
export default asdf