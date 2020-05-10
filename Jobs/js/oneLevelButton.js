var textInput = document.getElementsByClassName('jobInfo');
let maxHeight = 18;

for(let i = 0; i < textInput.length; i++)
{
    if(textInput[i].offsetHeight > maxHeight)
    {
        maxHeight = textInput[i].offsetHeight;
    }
    if((i % 3) === 2)
    {
        for(let j = i - 2; j < i + 1; j++)
        {
            textInput[j].style.height = maxHeight + 'px';
        }
        maxHeight = 18;
    }
    if(i === textInput.length - 1)
    {
        for(let j = (i / 3) * 3 - 1; j < textInput.length; j ++)
        {
                textInput[j].style.height = maxHeight + 'px';
        }
    }
}


