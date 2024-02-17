const inp = document.createElement('input');
const button = document.createElement('button');
button.innerHTML = 'button'
const atrr = inp.setAttribute('type','text');
const place = inp.setAttribute('placeholder','Please Enter The Name');
document.write(document.body.append(inp,button))


button.addEventListener('click',()=> {
    const inptval = document.querySelector('input').value;
    let p = document.querySelector('p');
    try {
        if(inptval == "") throw 'Please Fill the input';
        if(isNaN(inptval)) throw 'NOt a Number';
    } catch (error) {
        p.innerHTML = error;            
    }
    p.style.color = 'red    '
});
