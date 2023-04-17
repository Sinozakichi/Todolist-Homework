
function buttonAdd() {
    if(document.getElementsByTagName('input')[0].value!=""){
        var sure=confirm('確定多一件事?');
        if(sure){
            alert('好啦要更忙了QQ');
        textAdd(); 
        console.log(document.getElementsByTagName('input')[0].value)     
        }       
    }
    else{
        alert('甚麼都沒打喔!');
    }
}

function textAdd(){     
    var newDiv=document.createElement('div');
    newDiv.setAttribute('class','center');
    
    var newInput=document.createElement('input');
    newInput.setAttribute('type','text');
    
    var btnDelete=document.createElement('button');
    btnDelete.addEventListener('click',textDelete,false)
    btnDelete.innerText="完成";
    
    newDiv.append(newInput);
    newDiv.append(btnDelete);

    document.getElementsByName('first')[0].after(newDiv);
    newInput.value=document.getElementsByTagName('input')[0].value;
    document.getElementsByTagName('input')[0].value=""; 
}

function textDelete(e){
    var sureDelete =confirm('完成了嗎?');
    var deleteThing=e.target.parentElement;
        if(sureDelete){
            alert('解決了YA!');            
            deleteThing.remove();
        } 
}  
    



