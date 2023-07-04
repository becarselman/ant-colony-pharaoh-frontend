export const dateMapper = (customDate) => {
    const shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const splitDate = customDate.split(" ")
    const month = splitDate[0]
    const year = splitDate[1]

    let RFC3339Date = `${year}-`

    let monthInNumber = "" + (shortMonths.indexOf(month) + 1)

    if (monthInNumber.length === 1) {
        monthInNumber = "0" + monthInNumber
    }

    RFC3339Date += `${monthInNumber}-01`

    return RFC3339Date
}