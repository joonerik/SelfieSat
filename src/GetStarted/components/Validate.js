export default function validate(values){
    let errors = {}

    if(!values.fullName){
        errors.fullName = "Full name is required"
    }else if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(values.fullName)){
        errors.fullName = "Name is invalid"
    }

    if(!values.email){
        errors.email = "Email address is required"
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email address is invalid"
    }

    if(!values.phone){
        errors.phone = "Phone number is required"
    }else if(!/^\d{10}$/){
        errors.phone = "Phone number is invalid"
    }

    return errors;
}