import {PARAM_MAPPER, ECU_INFO_PARAMS} from './constants';
import pdef from './protocol-definition.js';
const indexedPdef = {}
pdef.forEach(protocol => {
    protocol.commands.forEach(command => indexedPdef[command.raw] = {...command, params: protocol.params})
})


const parseMessage = (message, humanReadable=false) => {
    if (!message.length)
        return null
    const params = message.split(',')
    let messageType = params[0];
    let buffered = false
    // AT commands use the format AT+GTxxx=password
    if (messageType.includes('AT')) {
        const equalIndex = messageType.indexOf('=')
        params.splice(1, 0, messageType.slice(equalIndex + 1))
        messageType = messageType.slice(0, equalIndex)
    }
    const orgMessageType = messageType
    // Report messages are buffered if the scooter can't connect to the server
    if (messageType.includes('BUFF')) {
        buffered = true;
        messageType = messageType.replace('BUFF', 'RESP')
    }
    // a general acknowledge
    if (messageType.includes('ACK') && !(messageType in indexedPdef)) {
        messageType = '+ACK:GTXXX'
    }
    if (!(messageType in indexedPdef)) {
        throw(`Unrecognized message type ${messageType}`)
    }
    const commandDef = indexedPdef[messageType];
    params.splice(0, 1);

    return {
        ...commandDef,
        params: params.reduce((prev, param, index) => {
            const paramName = commandDef.params[index];
            if (paramName === 'ecuInfo') {
                param = param.split('&').reduce((prev, param, index) => {
                    if(!param)
                        return prev
                    const ecuParamName = ECU_INFO_PARAMS[index]

                    if(ecuParamName in PARAM_MAPPER && humanReadable)
                        param = PARAM_MAPPER[ecuParamName][param]
                    return {...prev, [ecuParamName]: param};
                }, {})
            }
            else if(['generatedTime', 'gpsUtcTime'].includes(paramName)){
                const date = param.match(/.{2}/g).slice(1);
                date[0] = parseInt(date[0]) + 2000;
                date[1]--;
                param = new Date(...date)
            }
            else if(paramName in PARAM_MAPPER && humanReadable && !(paramName === 'reportType' && commandDef.command !== 'GTMLS'))
                param = PARAM_MAPPER[paramName][param]

            return {...prev, [paramName]: param}
        }, {}),
        buffered: buffered,
        raw: message,
        rawMessageType: orgMessageType
    }
}

console.log(parseMessage('+RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,0,43.9,-21.903480,64.142110,20210126003426,,0274,0001,0001,007E,26&99,1,41,0,48801,4093,93,0,1,0,,0.0&0.00&0.0&5.1&1&0&0&000000132020070201090000&000000CE2019090301000000&0&0&026419181918FFFFFF92&2&2&00000000000000,55,20210126145214,3481', true))

module.exports = parseMessage