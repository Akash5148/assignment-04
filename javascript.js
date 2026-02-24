let InterviewList= [];
let RejectedList =[];

let totalCount =document.getElementById('totalCount');

let InterviewCount =document.getElementById('InterviewCount');
let RejectedCount =document.getElementById('RejectedCount');

const allFilterBtn =document.getElementById('All-filter-btn');
const InterviewFilterBtn =document.getElementById('Interview-filter-btn');
const RejectedFilterBtn =document.getElementById('Rejected-filter-btn');


const allCardSection =document.getElementById('allCards');

const mainContainer =document.querySelector('main')





function calculateCount(){ 
    totalCount.innerText =allCardSection.children.length
    InterviewCount.innerText = InterviewList.length
    RejectedCount.innerText = RejectedList.length
}
calculateCount()

function toggleStyle(id){ 

    allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')
    InterviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')
    RejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')

    allFilterBtn.classList.add('bg-gray-300', 'text-white')
    InterviewFilterBtn.classList.add('bg-gray-300', 'text-white')
    RejectedFilterBtn.classList.add('bg-gray-300', 'text-white')

    const selected =document.getElementById(id)
    selected.classList.remove('bg-gray-300' ,'text-white')
    selected.classList.add('bg-[#3B82F6]', 'text-white')

}