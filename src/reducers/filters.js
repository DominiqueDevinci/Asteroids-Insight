import {SET_FILTER_DATE_START,
SET_FILTER_DATE_END} from '../Actions.js'


export function filters(
    state={
        dateStart: '2017-09-01', //new Date().toISOString("YYYY-MM-DD").substring(0, 10),
        dateEnd:  '2017-09-08' //new Date().toISOString("YYYY-MM-DD").substring(0, 10)
    }, action = {type: undefined}
){
    switch(action.type){
        case SET_FILTER_DATE_START:
            return {...state,
                dateStart: action.dateStart
            }
        case SET_FILTER_DATE_END:
            return {...state,
                dateEnd: action.dateEnd
            }
        default:
            return state;
    }

}
