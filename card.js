const deleteCard = (id) => {
    if(window.confirm("Da li ste sigurni da zelite obrisati vijest ? ")){
    fetch(`http://localhost:5000/api/remove/${id}`, {
         method: "DELETE",
     })
     (alert("Vijest uspješno obrisana "), osvjeziStranicu())
     .then(res => {
         if(!res.ok)
         {
             alert('Error');
         }
     })
    .catch(err => console.log(err)) 
    }
 }

 //PUT
const editCards = () => { 
    const cardId = document.getElementById('card-id').value;
    const cardNaslov = document.getElementById('card-naslov').value;
    const cardSlika = document.getElementById('card-slika').value;
    const cardTekst = document.getElementById('card-tekst').value;

    fetch(`http://localhost:5000/api/update/${cardId}/`, {
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

function osvjeziStranicu() {
    setTimeout(function() {
      location.reload();
    }, 1000); // Ovdje postavite željeni broj milisekundi (npr. 5000 za 5 sekundi)
  }
 