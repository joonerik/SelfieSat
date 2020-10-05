import {useState} from "react";

const useForm = () => {

    const [values, setValues] = useState({ fullName: "", email: "", phone: "" });
    const [errors, setErrors] = useState({ fullName: "", email: "", phone: "" });



    const handleFormChange = (e) => {
        const { name, value } = e.target;
    
        setValues({
          ...values,
          [name]: value
        });
      };


      return{
          handleFormChange,
          setValues,
          errors,
          setErrors,
          values
      }
}

export default useForm