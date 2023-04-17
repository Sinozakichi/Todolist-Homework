
function buttonadd() {
    if(document.getElementsByTagName('input')[0].value!=""){
        var sure=confirm('確定多一件事?');
        if(sure){
            alert('好啦要更忙了QQ');
        textadd(); 
        console.log(document.getElementsByTagName('input')[0].value)     
        }       
    }
    else{
        alert('甚麼都沒打喔!');
    }
}

function textadd(){     
    var adiv=document.createElement('div');
    adiv.setAttribute('class','center');
    
    var newinput=document.createElement('input');
    newinput.setAttribute('type','text');
    
    var btndelete=document.createElement('button');
    btndelete.addEventListener('click',textdelete,false)
    btndelete.innerText="完成";
    
    adiv.append(newinput);
    adiv.append(btndelete);

    document.getElementsByName('first')[0].after(adiv);
    newinput.value=document.getElementsByTagName('input')[0].value;
    document.getElementsByTagName('input')[0].value=""; 
}

function textdelete(e){
    var suredelete =confirm('完成了嗎?');
    var deletething=e.target.parentElement;
        if(suredelete){
            alert('解決了YA!');            
            deletething.remove();
        } 
}  
    



