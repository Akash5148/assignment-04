let InterviewList = [];
let RejectedList = [];
const jobCounter = document.getElementById("jobCounter");
let currentStatus = 'All-filter-btn'

let totalCount = document.getElementById('totalCount');

let InterviewCount = document.getElementById('InterviewCount');
let RejectedCount = document.getElementById('RejectedCount');

const allFilterBtn = document.getElementById('All-filter-btn');
const InterviewFilterBtn = document.getElementById('Interview-filter-btn');
const RejectedFilterBtn = document.getElementById('Rejected-filter-btn');


const allCardSection = document.getElementById('allCards');

const mainContainer = document.querySelector('main')
const filterSection = document.getElementById('filtered-section')




function calculateCount() {
    totalCount.innerText = allCardSection.children.length
    InterviewCount.innerText = InterviewList.length
    RejectedCount.innerText = RejectedList.length
}
calculateCount()
updateJobCounter();
function toggleStyle(id) {

    allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')
    InterviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')
    RejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')

    allFilterBtn.classList.add('bg-gray-300', 'text-black')
    InterviewFilterBtn.classList.add('bg-gray-300', 'text-black')
    RejectedFilterBtn.classList.add('bg-gray-300', 'text-black')

    const selected = document.getElementById(id)
    currentStatus = id
    selected.classList.remove('bg-gray-300', 'text-white')
    selected.classList.add('bg-[#3B82F6]', 'text-white')

    if (id == 'Interview-filter-btn') {
        allCardSection.classList.add('hidden')
        filterSection.classList.remove('hidden')
        renderInterview();
        currentStatus = 'Interview-filter-btn';
        updateJobCounter();
    }
    else if (id == 'All-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden')
    }

    else if (id == 'Rejected-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderRejected();
        currentStatus = 'Rejected-filter-btn';
        updateJobCounter();
    }
    updateJobCounter();
    checkEmpty(currentStatus); 
}


mainContainer.addEventListener('click', function (event) {

    if (event.target.classList.contains('interview-btn')) {
        const parenNode = event.target.parentNode.parentNode;
        const mobile = parenNode.querySelector('.Mobile').innerText
        const React = parenNode.querySelector('.React').innerText
        const Remote = parenNode.querySelector('.Remote').innerText
        const status = parenNode.querySelector('.status').innerText
        const notes = parenNode.querySelector('.notes').innerText
        parenNode.querySelector('.status').innerText = 'Interview'
        const cardInfo = {
            Mobile: mobile,
            React: React,
            Remote: Remote,
            status: 'Interview',
            notes: notes,


        }
        const mobileExist = InterviewList.find(item => item.Mobile == cardInfo.Mobile)


        if (!mobileExist) {
            InterviewList.push(cardInfo)

        }
        RejectedList = RejectedList.filter(item => item.Mobile != cardInfo.Mobile)
        calculateCount()
        renderInterview();
        checkEmpty(currentStatus); 
    }
    else if (event.target.classList.contains('rejected-btn')) {
        const parenNode = event.target.parentNode.parentNode;
        const mobile = parenNode.querySelector('.Mobile').innerText
        const React = parenNode.querySelector('.React').innerText
        const Remote = parenNode.querySelector('.Remote').innerText
        const status = parenNode.querySelector('.status').innerText
        const notes = parenNode.querySelector('.notes').innerText
        parenNode.querySelector('.status').innerText = 'Rejected'
        const cardInfo = {
            Mobile: mobile,
            React: React,
            Remote: Remote,
            status: 'Rejected',
            notes: notes,


        }
        const mobileExist = RejectedList.find(item => item.Mobile == cardInfo.Mobile)


        if (!mobileExist) {
            RejectedList.push(cardInfo)

        }
        InterviewList = InterviewList.filter(item => item.Mobile != cardInfo.Mobile)
        calculateCount()
        renderRejected();
        checkEmpty(currentStatus); 
    }

    //delete part



    else if (event.target.classList.contains('delete-btn')) {
        const parenNode = event.target.closest('.card');
        const mobile = parenNode.querySelector('.Mobile').innerText;


        InterviewList = InterviewList.filter(item => item.Mobile !== mobile);
        RejectedList = RejectedList.filter(item => item.Mobile !== mobile);


        parenNode.remove();
        calculateCount();
        updateJobCounter();

        renderInterview();

        renderRejected();




        if (event.target.classList.contains('interview-btn')) {


            currentStatus = 'Interview-filter-btn';
            updateJobCounter();
            checkEmpty(currentStatus);
        }

        else if (event.target.classList.contains('rejected-btn')) {

            currentStatus = 'Rejected-filter-btn';
            updateJobCounter();
            checkEmpty(currentStatus);
        }
    }

}

)


function renderInterview() {
    filterSection.innerHTML = ''
    for (let Interview of InterviewList) {
        let div = document.createElement('div');
        div.className = 'card flex justify-between rounded-[8px] shadow-lg my-[40px]  border-t border-gray-300'

        div.innerHTML = `
    <div class="bg-[#FFFFFF]  space-y-5 px-[16px]">
                    <h2 class="text-[24px] font-bold mt-[24px] Mobile">${Interview.Mobile}</h2>
                    <p class="text-[#64748B] React">${Interview.React}</p>
                    <p class="text-[#64748B] Remote">${Interview.Remote}</p>
                    <p class="status font-medium text-[14px] bg-[#EEF4FF] px-[12px] uppercase
                    py-[8px] w-[120px] text-center rounded-[4px]">${Interview.status}</p>
                    <p class="notes">Build cross-platform mobile applications
                        using React Native. Work on products
                        used by millions of users worldwide.</p>

                    <div class="m-8 flex flex-row gap-3">
                        <button
                            class="interview-btn px-4 py-2 rounded-[8px] border border-green-500 text-green-500 uppercase font-semibold ">interview</button>
                        <button
                            class="rejected-btn px-4 py-2 rounded-[8px] border border-red-400 text-red-500 uppercase font-semibold">Rejected</button>
                    </div>


                </div>`


        filterSection.append(div)
    }


}

function renderRejected() {
    filterSection.innerHTML = ''
    for (let Rejected of RejectedList) {
        let div = document.createElement('div');
        div.className = 'card flex justify-between rounded-[8px] shadow-lg my-[40px]  border-t border-gray-300'

        div.innerHTML = `
    <div class="bg-[#FFFFFF]  space-y-5 px-[16px]">
                    <h2 class="text-[24px] font-bold mt-[24px] Mobile">${Rejected.Mobile}</h2>
                    <p class="text-[#64748B] React">${Rejected.React}</p>
                    <p class="text-[#64748B] Remote">${Rejected.Remote}</p>
                    <p class="status font-medium text-[14px] bg-[#EEF4FF] px-[12px] uppercase
                    py-[8px] w-[120px] text-center rounded-[4px]">${Rejected.status}</p>
                    <p class="notes">Build cross-platform mobile applications
                        using React Native. Work on products
                        used by millions of users worldwide.</p>

                    <div class="m-8 flex flex-row gap-3">
                        <button
                            class="interview-btn px-4 py-2 rounded-[8px] border border-green-500 text-green-500 uppercase font-semibold ">interview</button>
                        <button
                            class="rejected-btn px-4 py-2 rounded-[8px] border border-red-400 text-red-500 uppercase font-semibold">Rejected</button>
                    </div>


                </div>`


        filterSection.append(div)
    }


}
function updateJobCounter() {

    if (currentStatus === 'All-filter-btn') {
        jobCounter.innerText = allCardSection.children.length + " jobs";
    }
    else if (currentStatus === 'Interview-filter-btn') {
        jobCounter.innerText = InterviewList.length + " jobs";
    }
    else if (currentStatus === 'Rejected-filter-btn') {
        jobCounter.innerText = RejectedList.length + " jobs";
    }
}
updateJobCounter();
checkEmpty(currentStatus);

function checkEmpty(status) {
    const emptyDiv = document.getElementById('emptyMessage');

    let count = 0;
    if (status === 'All-filter-btn') count = allCardSection.children.length;
    else if (status === 'Interview-filter-btn') count = InterviewList.length;
    else if (status === 'Rejected-filter-btn') count = RejectedList.length;

    if (count === 0) {
        emptyDiv.classList.remove('hidden');
    } else {
        emptyDiv.classList.add('hidden');
    }
}
checkEmpty(currentStatus);