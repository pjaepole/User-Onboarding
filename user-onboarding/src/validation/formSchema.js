import * as yup from 'yup';

const formSchema = yup.object().shape({
    username:yup
        .string()
        .trim()
        .required('User name is required!')
        .min(4, "Username must be at least 4 characters long!"),
    email:yup
        .string()
        .email('Must be a valid form of email address!')
        .required('Email is required'),
    password: yup
        .string()
        .trim()
        .required('Yes, password is required')
        .min(4, "Password is required I think"),
    tos: yup.boolean()
})

export default formSchema;