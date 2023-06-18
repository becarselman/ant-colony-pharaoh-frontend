import axiosInstance from "../../../service/apiService"

export const createUser = (body) => {
    return axiosInstance.post("/register", body)
        .then(res => {
            return res
        })
        .catch(err => {
            throw err
        })
}