// 16 x 16 grid divs, place inside container div(place that inside the html)
// divs appear as grid with flexbox(careful with borders and margins)
//link style sheet, hover change color eventlistener,
const container = document.querySelector('.container');
const button = document.querySelector('.button');
let gridSize = 16
button.addEventListener('click',clearGrid)
button.addEventListener('click',()=>{grid(
    gridSize = prompt('Enter grid size','65'))
})
function grid(gridSize){
    for(let i = 0;i < gridSize;i++){
        let row = document.createElement('div')
        row.classList.add('row')
        row.style.cssText = 'display:flex;flex-basis:100%'
        container.appendChild(row)
        for(let i = 0;i < gridSize;i++){
            let cell = document.createElement('div');
            cell.classList.add('grid')
            cell.style.cssText = 'background-color:white;flex:1;aspect-ratio:1/1'
            row.appendChild(cell);
            cell.addEventListener('mouseover',function (e){
                e.target.style.background = 'black'
            })
        }
    }
}
function clearGrid(){
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild)}
    }
grid(gridSize)