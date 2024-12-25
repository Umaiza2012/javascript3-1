function display()
{
    var student={"Name":"Umaiza","Age":"13","School":"Dr.AQ Khan School & College, Islamabad."};
    document.getElementById("result").innerHTML= " My name is " +student.Name+ " my age is "+student["Age"]+ " and i go to "+student.School ;
}
display()