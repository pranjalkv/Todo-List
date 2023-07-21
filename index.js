
 let options = {
 	weekday: 'long',
 	year: 'numeric',
 	month: 'long',
 	day: 'numeric'
 };

 window.onload = function() {
  displaySave()
};

 let prnDt = new Date().toLocaleDateString('en-us', options);
 document.getElementById("time").innerHTML = prnDt
let ls=localStorage.getItem("save_todo");
let save_todo= ls ? JSON.parse(ls):[]
 	let formid = document.getElementById("task_form");
 	let writer = document.getElementById("add_task");
 	let adder = document.getElementById("todolist");

	function displaySave()
	{
		save_todo.map((ele,i)=>{		
		let topDiv = document.createElement('div');
 		topDiv.classList.add("entryDiv")
		topDiv.id=i

 		let subDiv = document.createElement("div")
 		subDiv.classList.add("data")

 		topDiv.appendChild(subDiv)

 		let todo_input = document.createElement("input")
 		todo_input.classList.add("inp")
 		todo_input.value = ele.edited;
 		todo_input.type = "text"
 		todo_input.setAttribute("readonly", "readonly");

 		// let todo_btn = document.createElement("div");
 		// todo_btn.classList.add("btns")

 		subDiv.appendChild(todo_input)
 		// topDiv.appendChild(todo_btn)

		let chk_btn=document.createElement("input")
		chk_btn.type="checkbox"
		chk_btn.checked=ele.tick;
		chk_btn.classList.add("chck")
		chk_btn.classList.add("btn")
		chk_btn.id=`cb${i}`
		subDiv.appendChild(chk_btn)

 		let edit_btn = document.createElement("button")
 		edit_btn.classList.add("edit")
		edit_btn.classList.add("btn")
		edit_btn.innerHTML="EDIT"

		if(chk_btn.checked===true)
		{
			edit_btn.innerHTML="DONE"
			edit_btn.style.color="skyblue";
			todo_input.classList.add("cut")
		}

 		let del_btn = document.createElement("button")
 		del_btn.classList.add("delete")
		del_btn.classList.add("btn")
		del_btn.innerHTML="DELETE"

 		subDiv.appendChild(edit_btn)
 		subDiv.appendChild(del_btn)

		adder.appendChild(topDiv)

		chk_btn.addEventListener("change",(e)=>
		{
			save_todo[i].tick=e.target.checked;
			localStorage.setItem("save_todo",JSON.stringify(save_todo))

			if(chk_btn.checked==true)
			{
			todo_input.classList.add("cut")
			edit_btn.innerHTML="DONE";
			edit_btn.style.color="skyblue";
			edit_btn.setAttribute("disabled","disabled")
			}
			else
			{
			todo_input.classList.remove("cut")
			edit_btn.innerHTML="EDIT"
			edit_btn.style.color="lawngreen";
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
				todo_input.setAttribute("readonly","readonly")
				
			}

				save_todo[i].edited=todo_input.value
			    localStorage.setItem("save_todo",JSON.stringify(save_todo))
			
		})

		del_btn.addEventListener("click",(e)=>
		{
			
			document.getElementById(i).remove();
			save_todo=save_todo.filter((del)=>del.edited!=ele.edited)
			localStorage.setItem("save_todo",JSON.stringify(save_todo))

		})
		})
	}

formid.addEventListener("submit", (e) => {
 		e.preventDefault();
 		let task = {
		     tick:false, 
			 edited:writer.value  
			}
        save_todo.push(task);
		localStorage.setItem("save_todo",JSON.stringify(save_todo))
		displaySave();
		location.reload();
 		writer.value = "";

 	})