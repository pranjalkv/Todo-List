 let options = {
 	weekday: 'long',
 	year: 'numeric',
 	month: 'long',
 	day: 'numeric'
 };
 let prnDt = new Date().toLocaleDateString('en-us', options);
 document.getElementById("time").innerHTML = prnDt

 	const formid = document.getElementById("task_form");
 	const writer = document.getElementById("add_task");
 	const adder = document.getElementById("todolist");

formid.addEventListener("submit", (e) => {
 		e.preventDefault();
 		let task = writer.value;

 		let topDiv = document.createElement('div');
 		topDiv.classList.add("entryDiv")

 		let subDiv = document.createElement("div")
 		subDiv.classList.add("data")

 		topDiv.appendChild(subDiv)

 		let todo_input = document.createElement("input")
 		todo_input.classList.add("inp")
 		todo_input.value = task;
 		todo_input.type = "text"
 		todo_input.setAttribute("readonly", "readonly");

 		let todo_btn = document.createElement("div");
 		todo_btn.classList.add("btns")

 		subDiv.appendChild(todo_input)
 		topDiv.appendChild(todo_btn)

		let chk_btn=document.createElement("input")
		chk_btn.type="checkbox"
		todo_btn.appendChild(chk_btn)

 		let edit_btn = document.createElement("button")
 		edit_btn.classList.add("edit")
		edit_btn.classList.add("btn")
		edit_btn.innerHTML="EDIT"

 		let del_btn = document.createElement("button")
 		del_btn.classList.add("delete")
		del_btn.classList.add("btn")
		del_btn.innerHTML="DELETE"

 		todo_btn.appendChild(edit_btn)
 		todo_btn.appendChild(del_btn)

		adder.appendChild(topDiv)

 		writer.value = "";

		chk_btn.addEventListener("click",()=>
		{
			if(chk_btn.checked==true)
			{
			todo_input.classList.add("cut")
			edit_btn.innerHTML="DONE";
			edit_btn.setAttribute("disabled","disabled")
			}
			else
			{
			todo_input.classList.remove("cut")
			edit_btn.innerHTML="EDIT"
			edit_btn.removeAttribute("disabled")
			}
		})
		edit_btn.addEventListener("click",()=>
		{
			if(edit_btn.innerHTML=="EDIT")
			{
				edit_btn.innerHTML="SAVE";
				todo_input.removeAttribute("readonly")
				todo_input.focus();
			}
			else
			{
				edit_btn.innerHTML="EDIT"
				todo_btn.setAttribute("readonly","readonly")
			}
		})

		del_btn.addEventListener("click",()=>
		{
			adder.removeChild(topDiv)
		})


 	})
