//DOM
const touches = [...document.querySelectorAll('.bouton')]; //tableau a plusieurs element
const listekeycode = touches.map(touche => touche.dataset.key) // map prend un tableau d element et applique une fonction a chaque element du tableau et retourne un nouveau tableau d elements modifier. dataset permet d acceder au element du data key
const ecran = document.querySelector('.ecran');

document.addEventListener('keydown',(e) => {
    const valeur = e.KeyCode.toString();
    calculer(valeur)
})

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)
})

const calculer = (valeur) => {
    if (listekeycode.includes(valeur)){
        switch(valeur){
            case '8':
                ecran.textContent = "";
                break;
            case'13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexkeycode = listekeycode.indexOf(valeur);
                const touche = touches[indexkeycode];
                ecran.textContent += touche.innerHTML;   
                

        }
    }
}

window.addEventListener('error', (e) => {
    alert('une erreur est survenue dans votre calcul:' + e.message)
    
})