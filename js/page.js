function begin()
{
    const homeScreen=document.getElementById('home');
    homeScreen.classList.add('hidden');

    const nextScreen=document.getElementById('next');
    nextScreen.classList.remove('hidden');
}

// const seatbtn=document.getElementsByClassName('now-btn');
// let count=0;
// let num=8;
// for(const i of seatbtn)
// {
//     i.addEventListener("click",function(){
//         num=num-1;
//         count=count+1;
//         document.getElementById("new-count").innertext=num;
//         document.getElementById("seat-count").innerText=count;
//     });
// }

   
    function selectSeat() {
        
        if (!this.classList.contains('selected')) {
            
            if (count >= 4) {
                alert('You can only select up to 4 seats.');
                return;
            }
            
            num--;
            count++;
            
            document.getElementById("new-count").innerText = num;
            document.getElementById("seat-count").innerText = count;
            
            this.classList.add('selected');
            
            this.style.backgroundColor = '#1DD100'; 

            const tableBody = document.getElementById('seat-detail');
        
            
            const newRow = document.createElement('tr');
            
            
            newRow.innerHTML = `
                <td class="px-5 font-raleway">${this.innerText}</td>
                <td class="px-5 font-raleway">Economic</td>
                <td class="px-5 font-raleway">550</td>
            `;
            
            
            tableBody.appendChild(newRow);
               
        const totalPrice = count * 550; 
      
        
        document.getElementById('some').innerText = totalPrice;
        document.getElementById('some-new').innerText = totalPrice;
       
    } 
     else {
            
            return;
        }
    }

    
    const seatbtn = document.querySelectorAll('.now-btn');
    let count = 0;
    let num = 8;

    
    seatbtn.forEach(btn => {
        btn.addEventListener("click", selectSeat);
    });

const getButton = document.getElementById('codes');


getButton.addEventListener('click', function() {
    
    const couponCode = document.getElementById('code').value;
    let discount = 0;
    if(count===4){
    if (couponCode === 'NEW15') {
        discount = 0.15; 
    } else if (couponCode === 'Couple20') {
        discount = 0.20; 
    }
}else
{
    alert('Please select 4 seats to apply the coupon code.');
        return;
}

   
    const totalPrice = parseInt(document.getElementById('some').innerText);
    const discountedPrice = totalPrice - (totalPrice * discount);
    document.querySelector('.flex.gap-1').style.display = 'none';

    
    document.getElementById('some-new').innerText = discountedPrice; 
});

const phoneNumberInput = document.getElementById('phone');
const nextButton = document.getElementById('ns');
nextButton.disabled = true;


function checkInputs() {
    const seatSelected = count > 0;
    const phoneNumberEntered = phoneNumberInput.value.trim() !== '';
    return seatSelected && phoneNumberEntered;
}


function updateNextButton() {
    nextButton.disabled = !checkInputs();
}


phoneNumberInput.addEventListener('input', updateNextButton);


seatbtn.forEach(btn => {
    btn.addEventListener("click", function() {
        
        updateNextButton();
       
        selectSeat.apply(this);
    });
});

function notun()
{
    const v=document.getElementById('next');
    v.classList.add('hidden');

    const v2=document.getElementById('hey');
    v2.classList.remove('hidden');
}


