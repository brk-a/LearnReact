import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Enter valid email').required('Required'),
    student_id: Yup.number().positive('Must be a positive number')
        .integer('Invalid student id')
        .required('Required'),

})

export default validationSchema