const columns = document.querySelectorAll('#rot #chess-table .col')
const tiles_0=columns[0].querySelectorAll('.tile')
const tiles_1=columns[1].querySelectorAll('.tile')
const tiles_2=columns[2].querySelectorAll('.tile')
const tiles_11=columns[11].querySelectorAll('.tile')
const tiles_12=columns[12].querySelectorAll('.tile')
const tiles_13=columns[13].querySelectorAll('.tile')


const tiles=[

    [tiles_0[0],tiles_0[1],tiles_0[2]],
    [tiles_1[0],tiles_1[1],tiles_1[2]],
    [tiles_2[0],tiles_2[1],tiles_2[2]],
    [tiles_11[0],tiles_11[1],tiles_11[2]],
    [tiles_12[0],tiles_12[1],tiles_12[2]],
    [tiles_13[0],tiles_13[1],tiles_13[2]],

    [tiles_0[11],tiles_0[12],tiles_0[13]],
    [tiles_1[11],tiles_1[12],tiles_1[13]],
    [tiles_2[11],tiles_2[12],tiles_2[13]],
    [tiles_11[11],tiles_11[12],tiles_11[13]],
    [tiles_12[11],tiles_12[12],tiles_12[13]],
    [tiles_13[11],tiles_13[12],tiles_13[13]],
]

tiles.forEach(value => {
    value[0].style.opacity=0
    value[1].style.opacity=0
    value[2].style.opacity=0
})