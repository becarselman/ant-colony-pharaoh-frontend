import axiosInstance from "../../../../../service/apiService"

export const editUser = (body) => {
    return axiosInstance.put(`/employee/${body._id}`, body)
        .then(res => {
            return res
        })
        .catch(err => {
            throw err
        })
}