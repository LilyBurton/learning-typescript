
// Beginning code for TS
let newYear: HTMLElement | null
newYear = document.getElementById("year")
let thisNewYear: string
thisNewYear = new Date().getFullYear().toString()
if (newYear) {
    newYear.setAttribute("datetime", thisNewYear)
    newYear.textContent = thisNewYear
}





const year = document.getElementById('year') as HTMLSpanElement
const thisYear: string = new Date().getFullYear().toString()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear