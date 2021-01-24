const output = document.getElementById('outputDiv');
const clear = document.getElementById('clear');
const englishPhrase = ['hello', 'pardon me', 'excuse me', 'stranger', 'sir', 'madam', 'officer', 'where is', 'can you help me find', 'is that', 'the', 'my', 'your', 'restroom', 'restaurant', 'hotel'];
const piratePhrase = ['ahoy', 'avast', 'arrr', 'scurvy dog', 'matey', 'proud beauty', 'foul blaggart', 'whar be', 'know ye', 'be that', 'th\'', 'me', 'yer', 'head', 'galley', 'fleabag inn'];

const image = document.getElementById('pirate-image');

function findPhrase(id) {
    const btnID = id;
    let oldPhrase = '';
    if (btnID.includes('-')) {
        oldPhrase = btnID.replaceAll('-', ' ');
    } else {
        oldPhrase = btnID;
    }

    const phraseIndex = englishPhrase.indexOf(oldPhrase);
    const newPhrase = piratePhrase[phraseIndex];

    return newPhrase;
}

function updateText(event) {

    const newPhrase = findPhrase(event.target.id);
   
    output.innerHTML += ` ${newPhrase}`;
};

function clearText(event) {
    output.innerHTML = '';
};

function updateImage(event) {
    const imageSrc = image.src;
    const updateSrc = '';
    
    if (imageSrc.includes('pirate1.jpg')) {
        updatedSrc = imageSrc.replace('pirate1', 'pirate2');
        console.log(updatedSrc);
        image.setAttribute('src', `${updatedSrc}`);
    } else {
        updatedSrc = imageSrc.replace('pirate2', 'pirate1');
        image.setAttribute('src', `${updatedSrc}`);
    }
}

const btns = document.querySelectorAll('.word-btn');
btns.forEach((btn) => {
btn.addEventListener('click', updateText);
});

clear.addEventListener('click', clearText);

image.addEventListener('mouseover', updateImage);
image.addEventListener('mouseout', updateImage);