// alert('Hello! look at me!!')

const alertUser = () =>{
    alert('Be attentive and serious to invest time for learning!')
} 

const seriousStudent = () =>{
    const serious = confirm('Are you spending 6-8hrs every single day to learn web dev?');

    if(serious === true){
        alert('Well done! keep it up.')
    }
    else{
        console.log('Valo hoye jao!!!! kopale dukkho ase!')
    }
}

const getName = () =>{
    const name = prompt('What is your name?')
    console.log(name)
}