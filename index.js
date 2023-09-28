const countValue = document.querySelector('#counter');
//const submitValue = document.getElementById('mybutton');

const increment = () => {
    let value = parseInt(countValue.innerText);
    value =value+1;
    countValue.innerText = value;
};

const decrement = () => {
    let value1 = parseInt(countValue.innerText);
    value1 = value1-1;
    countValue.innerText = value1;

};