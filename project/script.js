console.log('Hello!');

// insert check icon

const freePlan = document.querySelectorAll('.free-plan li');
const paidPlan = document.querySelectorAll('.paid-plan li');

for (let i = 0; i < freePlan.length; i++) {
    // freePlan and paidPlan have the same length
    freePlan[i].insertAdjacentHTML('afterbegin', '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="9"><path fill="#3EE9E5" d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z"/></svg>');
    paidPlan[i].insertAdjacentHTML('afterbegin', '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="9"><path fill="#093F68" d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z"/></svg>');
}

// validate form

const form = document.getElementById('form');
const input = document.getElementById('input');
const warningText = document.getElementById('warning-text');

function showHideWarning() {
    if (/^\S+@\S+\.\S+$/.test(input.value)) {
        warningText.style.display = 'none';
        input.style.border = 'none';  
    } else {
        warningText.style.display = 'block';
        input.style.border = '2px solid hsl(343, 100%, 58%)';
    }
}

form.addEventListener('submit', showHideWarning);
input.addEventListener('blur', showHideWarning);
