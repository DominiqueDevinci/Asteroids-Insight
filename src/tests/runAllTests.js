import {testReceiveClosest, testRequestClosest} from './reducers/tables.closest.js'

export default function runTests(){
    testRequestClosest()
    testReceiveClosest()
}
