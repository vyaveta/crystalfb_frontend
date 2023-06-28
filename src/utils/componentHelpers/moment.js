import moment from 'moment'

export const calculateAge = bDate => {
    const today = moment()
    const bDateMoment = moment(bDate,'YYYY-MM-DD')
    return today.diff(bDateMoment,'years')
}