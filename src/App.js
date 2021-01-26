import './App.css';
import {useEffect, useState} from 'react';
import {parseMessage} from './message'

const debugM = `
info: +RESP:GTNCN,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,22&99,1,41,0,48251,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126210347,3601$
info: AT+GTRTO=ZK102,3,,0,,,,0,,FFFF$
info: +ACK:GTRTO,EF8028,862785046849900,zk105,,REBOOT,FFFF,20210126210407,3602$
info: +RESP:GTPFA,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,22&99,1,41,0,48238,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126210407,3603$
info: +RESP:GTPNA,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,0&0,1,41,1,0,0,0,0,0,1,,0.0&0.00&0.0&5.7&0&0&0&000000132020070201090000&000000CE2019090301000000&0&0&00000000000000000000&2&2&00000000000000,0,20210126210415,3604$
info: +RESP:GTNCN,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF97&2&2&00000000000000,49,20210126210502,360A$
info: +RESP:GTMLS,EF8028,862785046849900,zk105,,,,,0,0,48238,4193,100,0,2,1,,20210126210422,3606$
info: +RESP:GTMLS,EF8028,862785046849900,zk105,,,,,30,0,48238,4193,100,0,2,1,,20210126210422,3607$
info: +RESP:GTMLS,EF8028,862785046849900,zk105,,,,,0,0,48251,4193,100,0,2,0,,20210126210422,3608$
info: +RESP:GTMLS,EF8028,862785046849900,zk105,,,,,30,0,48251,4193,100,0,2,0,,20210126210422,3609$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48251,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF97&2&2&00000000000000,49,20210126210645,360B$
info: +RESP:GTPNL,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF8C&2&2&00000000000000,49,20210126210648,360C$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48238,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF8C&2&2&00000000000000,49,20210126210650,360D$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48238,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126210655,360E$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126210700,360F$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48238,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF8C&2&2&00000000000000,49,20210126210705,3610$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF8C&2&2&00000000000000,49,20210126210710,3611$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126210715,3612$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF97&2&2&00000000000000,49,20210126210720,3613$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126210725,3614$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126210729,3615$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48238,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF97&2&2&00000000000000,49,20210126210735,3616$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126210740,3617$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126210745,3618$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF97&2&2&00000000000000,49,20210126210750,3619$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126210755,361A$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF8C&2&2&00000000000000,49,20210126210800,361B$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF97&2&2&00000000000000,49,20210126210804,361C$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126210810,361D$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126210815,361E$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126210820,361F$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171818FFFFFF92&2&2&00000000000000,49,20210126210825,3620$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126210830,3621$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126210835,3622$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF97&2&2&00000000000000,49,20210126210840,3623$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48213,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126210845,3624$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171818FFFFFF92&2&2&00000000000000,49,20210126210850,3625$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF97&2&2&00000000000000,49,20210126210855,3626$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126210900,3627$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126210905,3628$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126210910,3629$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126210915,362A$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF97&2&2&00000000000000,49,20210126210920,362B$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF8C&2&2&00000000000000,49,20210126210925,362C$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126210930,362D$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126210935,362E$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126210940,362F$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48213,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126210945,3630$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,24&0,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF8C&2&2&00000000000000,49,20210126210950,3631$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,23&99,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF97&2&2&00000000000000,49,20210126210955,3632$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,23&99,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF8C&2&2&00000000000000,49,20210126211000,3633$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,23&99,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF8C&2&2&00000000000000,49,20210126211005,3634$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,23&99,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126211010,3635$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,23&99,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126211015,3636$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,23&99,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126211020,3637$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,23&99,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126211025,3638$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,23&99,1,41,0,48201,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF97&2&2&00000000000000,49,20210126211030,3639$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,23&99,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126211035,363A$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,23&99,1,41,0,48201,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF8C&2&2&00000000000000,49,20210126211040,363B$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,23&99,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126211044,363C$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,23&99,1,41,0,48213,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF97&2&2&00000000000000,49,20210126211050,363D$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,23&99,1,41,0,48213,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171818FFFFFF92&2&2&00000000000000,49,20210126211055,363E$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,23&99,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126211100,363F$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,23&99,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126211105,3640$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,23&99,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF8C&2&2&00000000000000,49,20210126211110,3641$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,23&99,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126211115,3642$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,23&99,1,41,0,48201,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126211120,3643$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,23&99,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF8C&2&2&00000000000000,49,20210126211125,3644$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,23&99,1,41,0,48213,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171818FFFFFF92&2&2&00000000000000,49,20210126211130,3645$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,23&99,1,41,0,48213,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF97&2&2&00000000000000,49,20210126211135,3646$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,23&99,1,41,0,48201,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171818FFFFFF92&2&2&00000000000000,49,20210126211140,3647$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,23&99,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126211145,3648$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,23&99,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF97&2&2&00000000000000,49,20210126211545,3649$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,23&99,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF97&2&2&00000000000000,49,20210126211945,364A$
info: +RESP:GTFRI,EF8028,862785046849900,zk105,,,,,0,0000000000000000,0,0.0,33,6.4,-21.902818,64.142490,20210126155403,,0274,0001,0001,007E,23&99,1,41,0,48226,4093,93,0,1,0,,0.0&0.00&0.0&5.7&1&0&1&000000132020070201090000&000000CE2019090301000000&0&0&026418171817FFFFFF92&2&2&00000000000000,49,20210126212345,364B$
`
function App() {
  const [rawCommand, setRawCommand] = useState(debugM);
  const [parsedCommands, setParsedCommands] = useState([]);
  const [error, setError] = useState('');
  const [humanReadable, setHumanReadable] = useState();
  const [collapsed, setCollapsed] = useState(true);
  const [isColumn, setIsColumn] = useState(false);
  const handleCommandChange = (e) => {
    const newCommand = e.target.value;
    setRawCommand(newCommand.replace(/(\$)(?!\s*[\n])/g, '$\n'));
  }
  useEffect(() => {
    setParsedCommands([]);
    try {
      rawCommand.split('$').forEach(command => {
        command = command.trim().replace(/.*(\+\w{1,4}:|AT\+)/, "$1");
        if (!command)
          return
        const parsedCommand = parseMessage(command, humanReadable)
        setParsedCommands(prev => [...prev, parsedCommand])
      })
      error && setError('')
    } catch (e) {
      setError(e);
    }

  }, [rawCommand, humanReadable])
  const recursiveParams = (params) => {
    return Object.entries(params).map(([paramName, value]) => (
      <div className="ml">
        {typeof value === 'object' && !(value instanceof Date) ?
          <div style={{textAlign: 'left'}}>
            <div className="commandParamName">{paramName}</div>
            <div className="subParamContainer">{recursiveParams(value)}</div>
          </div> :
          <div className="commandParamContainer">
            <div className="commandParamName">{paramName}</div>
            <div
              className="commandParamValue">{value instanceof Date ? value.toLocaleString('en-GB', {timeZone: 'UTC'}) : value}</div>
          </div>
        }
      </div>

    ));
  }

  console.log(parsedCommands)
  return (
    <div className="App">
      <textarea className="mainInput" value={rawCommand} onChange={handleCommandChange}/>
      <br/>
      <label htmlFor="humanReadable">Human readable</label><input type="checkbox" id="humanReadable"
                                                                  onChange={() => setHumanReadable(prev => !prev)}
                                                                  checked={humanReadable}/>
      <label htmlFor="collapsed">Collapsed</label><input type="checkbox" id="collapsed"
                                                         onChange={() => setCollapsed(prev => !prev)}
                                                         checked={collapsed}/>
      <label htmlFor="column">Column</label><input type="checkbox" id="column"
                                                         onChange={() => setIsColumn(prev => !prev)}
                                                         checked={isColumn}/>
      {error && <div className="error">{error}</div>}
      <div className={`commandsContainer ${isColumn ? 'column' : ''}`}>
        {
          parsedCommands.map(command => (
            <div
              className={`commandContainer ${command.type === 'AT' && 'at'} ${command.type === 'ACK' && 'ack'} ${command.type === 'RESP' && command.command !== 'GTFRI' && 'notFixed'}`}>
              <div className="commandHeaderContainer">
                <div className="headerContainerGroup">
                  <div className="commandHeader">
                    {command?.rawMessageType}
                  </div>
                  <div className="commandDescription">
                    ({command?.description})
                  </div>

                </div>
                {collapsed && <div className="generatedTime">
                  {command?.params?.generatedTime?.toLocaleString('en-GB', {timeZone: 'UTC'})}
                </div>}
              </div>
              {!collapsed && recursiveParams(command?.params)}

            </div>
          ))
        }

      </div>
    </div>
  );
}

export default App;
