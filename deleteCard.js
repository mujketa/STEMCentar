const deleteCard = (id) => {
    if(window.confirm("Da li ste sigurni da zelite obrisati vijest ? ")){
    fetch(`http://localhost:5000/api/remove/${id}`, {
         method: "DELETE",
     })
     .then(res => {
         if(!res.ok)
         {
             alert('Error');
         }
     })
    .catch(err => console.log(err)) 
    }
 }
