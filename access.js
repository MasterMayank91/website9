
try
{
    var field = document.getElementsByClassName("field");

    var button = document.getElementsByClassName("button");

    var result = document.getElementsByClassName("result");

    var message = document.getElementById("message");

    var total, percentage, grade, message;

    total = percentage = grade = 0; // set default value

    var n1,n2,n3,n4,n5,n6;

    n1 = n2 = n3 = n4 = n5 = n6 = 0; // set default value

    var text = new String();    

    button[0].onclick = function()
    {
        n1 = Number(field[0].value);
        n2 = Number(field[1].value);
        n3 = Number(field[2].value);
        n4 = Number(field[3].value);
        n5 = Number(field[4].value);
        n6 = Number(field[5].value);

        total = Math.round(n1+n2+n3+n4+n5+n6);  // total method

        if(n6==0 ||n5==0 ||n4==0 ||n3==0 ||n2==0 ||n1==0)   
        {
            percentage = Math.round(total*100/500);
        }
        else
        {
            percentage = Math.round(total*100/600);
        }
            // percentage method
        
        if(percentage >= 90)
        {
            grade = 'A';
            text = "You are PASS by Grade A and know get ready to give me party";
        }
        if(percentage >= 75 && percentage < 90)
        {
            grade = 'B';
            text = "You are PASS by Grade B and next time ready to first";
        }
        if(percentage >= 55 && percentage < 75)
        {
            grade = 'C';
            text = "You are PASS by Grade C and try to more better";
        }
        if(percentage >= 45 && percentage < 55)
        {
            grade = 'D';
            text = "You are PASS by Grade D you just safe to fail";
        }
        if(percentage < 45)
        {
            grade = 'F';
            text = "You are FAIL by Grade F better luck next time";
        }
            // grade method

        result[0].innerText = total;

        result[1].innerText = percentage;

        result[2].innerText = grade;

        if(percentage <= 45)
        {
            message.innerText = text;
            message.style.color = "#a01111";
        }
        else
        {
            message.innerText = text;
            message.style.color = "#005500";
        }

    }
    button[1].onclick = function()
    {
        field[0].value = null;
        field[1].value = null;
        field[2].value = null;
        field[3].value = null;
        field[4].value = null;
        field[5].value = null;
    }

}
catch(error)
{
    alert("ERROR : "+error.message);
}
