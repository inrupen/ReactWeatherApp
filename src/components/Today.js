export default function Today() {

    let todaysDate = new Date()
    let daysList = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]
    let monthsList = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Aug",
        "Oct",
        "Nov",
        "Dec",
    ]
    let date = todaysDate.getDate()
    let month = monthsList[todaysDate.getMonth()]
    let year = todaysDate.getFullYear()
    let day = daysList[todaysDate.getDay()]
    let today = `${day} ${date} ${month} ${year}`

    return(
        <>
            {today}
        </>
    )
}