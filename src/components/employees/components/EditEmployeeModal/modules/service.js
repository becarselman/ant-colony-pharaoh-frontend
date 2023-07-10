import axiosInstance from "../../../../../service/apiService"

export const editUser = (body) => {
    const employeeId = body.id
    delete body["id"]
    return axiosInstance.put(`/employee/${employeeId}`, body)
        .then(res => {
            return res
        })
        .catch(err => {
            throw err
        })
}