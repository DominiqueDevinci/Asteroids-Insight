import expect from 'expect'
import deepFreeze from 'deep-freeze'
import {closest} from '../../reducers/tables.js'
import {receiveClosestAsteroids, requestClosestAsteroids} from '../../Actions.js'
import {closestExample} from './tables.closest.dataset.js'


export function testReceiveClosest(){
    console.log("running test: receive closest")
    let prevState=closest(undefined, receiveClosestAsteroids(undefined)) // return initial state
    let action=receiveClosestAsteroids(closestExample); // build input data witch action creator and eample set

    deepFreeze(action) // to ensure that my reducer don't use side effect (it should be pure)
    deepFreeze(prevState)

    let nextState=closest(prevState, action)

    expect(nextState.length).toEqual(2) // check counter
    expect(nextState.asteroids["2017-09-07"][0].name).toEqual("(2017 PN26)") // check name of first asteroid

    console.log("[OK]");
}

export function testRequestClosest(){
    console.log("running test: request closest")

    let prevState=closest(undefined, requestClosestAsteroids('2017-08-01', '2017-08-02')) // return initial state
    let action=requestClosestAsteroids('2017-09-05', '2017-09-09') // another date interval

    deepFreeze(prevState)
    deepFreeze(action)

    let nextState=closest(prevState, action)
    expect(nextState.length).toEqual(-1) // is the loader indicator enabled ? (length=-1 => "loading ...")
    expect(action.dateStart).toEqual('2017-09-05') // check if action creator is ok
    expect(action.dateEnd).toEqual('2017-09-09')
    expect(nextState.dateStart).toEqual(action.dateStart) // check if new state corresponds
    expect(nextState.dateEnd).toEqual(action.dateEnd)
    console.log("[OK]")

}
