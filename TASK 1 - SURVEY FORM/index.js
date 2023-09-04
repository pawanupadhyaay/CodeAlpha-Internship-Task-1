var currentPage = 1;
var surveyData = {};

function saveDataAndMoveNext(pageNumber)
{
    surveyData['page' + pageNumber] = {};
    var questions = document.querySelectorAll('#page' + pageNumber + ' .question input');
    questions.forEach(function (question, index)
    {
        surveyData['page' + pageNumber] ['question' + (index + 1)] = question.value;
    });

    localStorage.setItem('surveyData', JSON.stringify(surveyData));
    currentPage++;
    showPage(currentPage);
     

}

function moveToPreviousPage()
{
    currentPage--;
    showPage();
}

function showPage()
{
    var pages = document.getElementsByClassName('page');

    for(var i = 0; i < pages.length; i++)
    {
        pages[i].style.display = 'none';
    }

    if(currentPage < pages.length && currentPage >= 1)
    {
        document.getElementById('page' + currentPage).style.display = 'block';

        var inputElement = document.getElementById('question' + currentPage);

        if(serveyData['page' + currentPage])
        {
            inputElement.value = surveyData['page' + currentPage]; 
        }
        else{
            inputElement.value = '';
        }
    }
    if(currentPage === 3)
    [document.getElementById('page3').style.display = 'block',
    ]
}