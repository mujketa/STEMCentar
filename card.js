 let cards = [];

 const fillEditData = (cardIdd) => {
    const card = cards.find(card => card.id_vijesti === cardIdd);
    const cardId = document.getElementById('card-id').value;
    const cardNaslov = document.getElementById('card-naslov').value;
    const cardSlika = document.getElementById('card-slika').value;
    const cardTekst = document.getElementById('card-tekst').value;


    cardId.value = card.id_vijesti;
    cardNaslov.value = card.naslov;
    cardSlika.value = card.slika;
    cardTekst.value = card.tekst;
}


 //PUT
const editCards = (id) => { 
    const cardId = document.getElementById('card-id').value;
    const cardNaslov = document.getElementById('card-naslov').value;
    const cardSlika = document.getElementById('card-slika').value;
    const cardTekst = document.getElementById('card-tekst').value;

    fetch(`http://localhost:5000/api/update/${id}/`, {
        method: 'PUT', 
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({
            id_vijesti: cardId,
            naslov: cardNaslov,
            slika: cardSlika,
            tekst: cardTekst
        })
    })
    .then(res => {
        if(!res.ok)
        {
            alert('Errorrrr');
        }
    })
    .catch(error => console.log(error))
}


const cardss = () => {
    console.log(hellooo);
}
 