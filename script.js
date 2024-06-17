let input_bill = document.getElementById("input-bill");
let tip_percentage = document.querySelectorAll(".tip-percentage");
let tip_percentage_input = document.getElementById("tip-percentage-input");
let decrease_people = document.getElementById("decrease-people");
let increase_people = document.getElementById("increase-people");
let calculate_tip = document.getElementById("calculate-tip");
let reset_form = document.getElementById("reset-form");
let total_bill = document.querySelector(".bill");
let number_of_people = document.getElementById("number-of-people");
let heads = document.querySelector(".heads");

tip_percentage_input.addEventListener("input", () => {
	if (tip_percentage_input.value != 0) {
		tip_percentage.forEach((element) => {
			element.disabled = true;
		});
	}

	let percentage = Number(tip_percentage_input.value) / 100;
	getTotalBill(percentage);
});

tip_percentage.forEach((element) => {
	element.addEventListener("input", () => {
		if (element.checked) {
			tip_percentage_input.disabled = true;
			let percentage = Number(element.value);
			getTotalBill(percentage);
		}
	});
});

let numberOfPeople = {
	value: 0,

	decrementNumOfPeople() {
		number_of_people.value--;
	},

	incrementNumOfPeople() {
		number_of_people.value++;
	},
};

number_of_people.value = numberOfPeople["value"];

decrease_people.addEventListener("click", () => {
	numberOfPeople.decrementNumOfPeople();
});
increase_people.addEventListener("click", () => {
	numberOfPeople.incrementNumOfPeople();
});

let getTotalBill = (percentage) => {
	calculate_tip.addEventListener("click", () => {
		let bill = Number(input_bill.value);
		let tip = bill * percentage;
		let bill_value = tip + bill;
		total_bill.textContent = bill_value;
		getPaymentEachPerson(bill_value);
	});
};

let getPaymentEachPerson = (bill) => {
	let people = Number(number_of_people.value);
	heads.textContent = bill / people;
};

reset_form.addEventListener("click", () => {
	tip_percentage.forEach((element) => {
		element.checked = false;

		if (element.disabled) {
			element.disabled = false;
		}
	});

	if (tip_percentage_input.disabled) {
		tip_percentage_input.disabled = false;
	}

	input_bill.value = "";
	tip_percentage_input.value = "";
	heads.textContent = "0";
	total_bill.textContent = "0";
});
