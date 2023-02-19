const bookNameElement=document.getElementbyId('book-name');
const issuetoElement=document.getElementbyId('issue-to');
const btnElement=document.getElementbyId('btn');
const tableBody=document.querySelector.Selector("tbody");
const books=[
    {
        Name: AFCAT,
        issuedTo: suraj,
        issueAt: new Date().toUTCString,
        status:'not returned'
    }
];



function  createTableRow( data,tableBody ,id){
    const tr=document.createElement('tr');

    const idTd=document.createElement("td");
    idTH.textContent= id;

    const bookNameTd=document.createElement("td");
    bookNameTd.textContent= data.name;


    const issuetoTd=document.createElement("td");
    issueToTd.textContent= data.issuedTo;


    const issuedAtTd=document.createElement("td");
    issuedAtTd.textContent= data.issuedAt;


    const statusTd=document.createElement("td");
    statustTd.textContent= data.status;


    tr.appendChild(idTd);
    tr.appendChild(bookNameTd);
    tr.appendChild(issuetoTd);
    tr.appendChild(issuedAtTd);
    tr.appendChild(statusTd);

    tableBody.appendChild(tr);
}


function   renderBooksInsideTable(){
  books.map(function(books,index){

    createTableRow( book,tableBody,index+1);
  })

  
}

function handleFormSubmit(){
    const bookName= bookNameElement.value;
    const issuedTo= issuedToElement.value;

   if(bookName& issuedTo){
    const book={
        Name: bookName,
        issuedTo: issuedTo,
        issueAt: new Date().toUTCString,
        status:'not returned'
    };

    books.push(book);
    renderBooksInsideTable();

}
else{
    alert("you are trying to enter empty detals");
}

}
renderBooksInsideTable();

btnElement.addEventListener('click',handleFormSubmit);