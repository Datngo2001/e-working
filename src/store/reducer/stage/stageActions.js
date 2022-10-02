import { LOAD_STAGE_FAILURE, LOAD_STAGE_SUCCESS } from "./stageActionTypes"
import { getAllProjectStage } from '../../../api/stage'
import { call, put } from "redux-saga/effects"
import { dateDiffInDays } from "../../../util/date"

export function* loadAllProjectStage({ payload }) {
    try {
        const res = yield call(getAllProjectStage, payload)

        const stages = res.data.map(stage => {
            stage.startDate = new Date(stage.startDate);
            stage.endDate = new Date(stage.endDate);
            return stage
        })

        let startDate = stages[0]?.startDate;
        stages.forEach((stage) => {
            if (stage.startDate < startDate) {
                startDate = stage.startDate;
            }
        });

        let endDate = stages[0]?.endDate;
        stages.forEach((stage) => {
            if (stage.endDate > endDate) {
                endDate = stage.endDate;
            }
        });

        if (stages.length == 0) {
            startDate = new Date()
            endDate = new Date()
        } else {
            startDate = new Date(startDate)
            endDate = new Date(endDate)
        }

        startDate.setFullYear(startDate.getFullYear() - 1)
        endDate.setFullYear(endDate.getFullYear() + 1)

        while (startDate.getDay() != 1) {
            startDate.setDate(startDate.getDate() - 1);
        }

        while (endDate.getDay() != 0) {
            endDate.setDate(endDate.getDate() + 1);
        }

        let totalDate = dateDiffInDays(endDate, startDate)

        yield put({
            type: LOAD_STAGE_SUCCESS,
            payload: { stages, ganttChart: { startDate, endDate, totalDate } }
        })
    } catch (error) {
        yield put({
            type: LOAD_STAGE_FAILURE,
            payload: error
        })
    }
}