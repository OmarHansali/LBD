/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Axios from "../services/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useForm = (
    initialState: any,
    api: string,
    method: string,
    toastSuccessMessage?: string,
    toastErrorMessage?: string,
    navigateBack?: boolean
    // hasFile = false,
    // isAuth = false,
    // logout = false
) => {
    const [inputs, setInputs] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [data, setData] = useState<any>();

    const navigate = useNavigate()

    const handleChange = (name: string, value: string | number | boolean) => {
        setInputs((prevInputs: any) => ({
            ...prevInputs,
            [name]: value,
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
        }));
    };

    const handleSubmit = async (e: any=null) => {
        e && e.preventDefault();
        setIsLoading(true);
        const loadingToastId = toast.loading("Chargement...", { position: "top-right" });

        try {
            const config = {
                method: method,
                url: api,
                data: inputs,
                headers: { "Content-Type": "application/json" },
            };

            // if (hasFile) {
            //     config.headers = { 'Content-Type': 'multipart/form-data' };
            //     // Create a FormData object and append inputs to it

            //     const formData = new FormData();
            //     for (const key in inputs) {
            //         formData.append(key, inputs[key]);
            //     }
            //     config.data = formData;
            // }

            // if (isAuth) {
            //     config.headers = { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            // }

            // ---------------send data ----------------------
            const response = await Axios(config);

            // ------------------------------------------------

            const successStatus = [200, 201, 202] as number[]

            if (successStatus.includes(response.status)) {
                setMessage(response.data.message);
                setData(response);
                toast.update(loadingToastId, {
                    render: toastSuccessMessage || "Success!",
                    type: "success",
                    isLoading: false,
                    autoClose: 3000,
                    position: "top-right",
                });

                if (navigateBack) {
                    setTimeout(() => {
                        navigate(-1)
                    }, 1000)
                }
            }
        } catch (error: any) {
            const err = error?.response?.data?.errors;
            let errorMessage = ""; // Define a variable to store the error message
            setErrors(err);

            if (error.response) {
                // The request was made and the server responded with a status code
                const status = error.response.status;

                switch (status) {
                    case 400:
                        errorMessage = "Bad request: The server cannot process the request due to a client error.";
                        break;
                    case 401:
                        errorMessage = "Unauthorized: The user is not authenticated to perform the request.";
                        break;
                    case 402:
                        errorMessage = "Payment Required: This status code is reserved for future use.";
                        break;
                    case 405:
                        errorMessage = "Method not allowed";
                        break;
                    // Add more cases for other status codes as needed
                    default:
                    // errorMessage = error.response.data?.message || "An error occurred while processing your request.";
                }
            } else if (error.request) {
                // The request was made but no response was received
                errorMessage = "No response received from the server.";
            } else {
                // Something else happened while setting up the request
                errorMessage = "An error occurred while making the request.";
            }

            // Set the error message in the message state variable
            setMessage(errorMessage);

            toast.update(loadingToastId, {
                render: toastErrorMessage || errorMessage,
                type: "error",
                isLoading: false,
                autoClose: 3000,
                position: "top-right",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return { inputs, errors, data, message, isLoading, handleChange, handleSubmit, setMessage };
};

export default useForm;
