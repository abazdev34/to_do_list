// crud -create read{rename} update delete

// to do list

const ul = document.querySelector('ul')
const btn = document.querySelector('button')
const input = document.querySelector('input')
btn.addEventListener('click', e => {
	if (input.value === '') {
		return false
	}
	let newText = `<li class="list-group-item d-flex justify-content-between 
    align-items-center">

    ${input.value} 
    <BUtton class="del-btn btn btn-success">delete</button>
    </li>`
	ul.innerHTML += newText
	input.value = ''
})
ul.addEventListener('click', e => {
	console.log(e.target.classList.contains('del-btn'))
	if (e.target.classList.contains('del-btn')) {
		e.target.parentNode.remove()
	}
})
input.addEventListener('keydown', e => {
	if (e.key === 'Enter') {
		if (input.value === '') {
			return false
		}

		let newText = `<li class="list-group-item d-flex justify-content-between 
        align-items-center">
    
        ${input.value} 
        <BUtton class="del-btn btn btn-success">delete</BUtton>
        </li>`
		ul.innerHTML += newText

		input.value = ''
	}
})
xczsdfdnhmvbncvbx
