import axiosInstance from '../../../service/apiService';
import { faker } from "@faker-js/faker";

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

const generateRandomEmployees = (page, pageSize, count) => {
    return {
        data: {
            employees: faker.helpers.multiple(createRandomEmployee, {
                count
            }).slice((page-1)*pageSize, (page-1)*pageSize + pageSize),
            count
        }
    }
}

export const getAllEmployees = ({ page, pageSize, statusQueryParam, searchQueryParam }) => {
    if (!page || !pageSize) {
        return new Promise((resolve, reject) => {
            resolve([])
        })
    }

    return axiosInstance.get(`/employee/paginated?page=${page}&limit=${pageSize}&${searchQueryParam}`)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            throw error;
        });
};
