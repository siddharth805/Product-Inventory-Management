let pdtTag=document.getElementById('product');
let priceTag=document.getElementById('price');
let qtyTag=document.getElementById('quantity');
let selectTag=document.getElementById('select');
let btnTag=document.getElementById('btn');
let listcontainer=document.getElementById('list-container');


function add(){
    if(pdtTag.value==="" || priceTag.value==="" || qtyTag.value===""){
        alert("Fill input field");
        saveData();
    }else{
        let tr=document.createElement('tr');
        // td.innerHTML.pdtTag.value;
        // listcontainer.appendChild(td);
        let td1=document.createElement('td');
        td1.innerHTML=pdtTag.value;

        let td2=document.createElement('td');
        td2.innerHTML=priceTag.value;

        let td3=document.createElement('td');
        td3.innerHTML=qtyTag.value;

        let td4=document.createElement('td');
        td4.innerHTML=selectTag.value;

        let td5=document.createElement('td');
        let editBtn=document.createElement('button');
        editBtn.className='edit';
        editBtn.innerText='Edit';
        editBtn.addEventListener('click', function(){
            pdtTag.value = td1.innerText;
            priceTag.value = td2.innerText;
            qtyTag.value = td3.innerText;
            selectTag.value = td4.innerText;
            listcontainer.removeChild(tr);
        });

        let deleteBtn=document.createElement('button');
        deleteBtn.className='delete';
        deleteBtn.innerText='Delete';
        deleteBtn.addEventListener('click', function(){
            listcontainer.removeChild(tr);
        });

        td5.appendChild(editBtn);
        td5.appendChild(deleteBtn);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        listcontainer.appendChild(tr);

        pdtTag.value='';
        priceTag.value='';
        qtyTag.value='';
        selectTag.value='Electronics';
        saveData();
    }
}

function saveData(){
    localStorage.setItem('products', listcontainer.innerHTML);
}

function showTask(){
    listcontainer.innerHTML=localStorage.getItem('products');
}
showTask();