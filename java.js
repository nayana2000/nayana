function addhtmlTablerow()
	{
	var table = document.getelement("table"),
	 newrow = table.insertrow(table.length),
	 cell1 = newrow.insertcell(0),
	 cell2 = newrow.insertcell(1),
	 cell3 = newrow.insertcell(2),
	 si = document.getelement("si").value,
	 name = document.getelement("name").value,
	 emp = document.getelement("emp").value;
	 
	 cell1.innerhtml = si;
	 cell2.innerhtml = name;
	 cell3.innerhtml = emp;
}