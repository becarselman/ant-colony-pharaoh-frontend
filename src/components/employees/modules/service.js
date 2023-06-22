import axiosInstance from '../../../service/apiService';
import { faker } from "@faker-js/faker";
const URL = process.env.REACT_APP_API_URL;

const createRandomEmployee = () => {
    return {
        _id: faker.string.uuid(),
        name: faker.person.firstName(),
        surname: faker.person.lastName(),
        department: faker.helpers.arrayElement(["Management", "Administration", "Design", "Development"]),
        salary: faker.number.float({
            min: 0,
            max: 5000
        }),
        stack: faker.helpers.arrayElement(["Full Stack", "Front End", "Back End", "N/A"])
    }
}

export const getAllEmployees = ({ page, pageSize, statusQueryParam, searchQueryParam }) => {
    // return axiosInstance.get(`${URL}/projects?page=${page}&limit=${pageSize}&projectStatus=${statusQueryParam}&${searchQueryParam}`)
    //     .then((response) => {
    //         return response;
    //     })
    //     .catch((error) => {
    //         throw error;
    //     });
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: {
                    employees: faker.helpers.multiple(createRandomEmployee, {
                        count: 45
                    }).slice((page-1)*pageSize, (page-1)*pageSize + pageSize),
                    count: 45
                }
            })
        },
            1500)
    })
};
