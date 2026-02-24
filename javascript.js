let InterviewList = [];
let RejectedList = [];
let currentStatus = 'all'

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

function toggleStyle(id) {

    allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')
    InterviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')
    RejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')

    allFilterBtn.classList.add('bg-gray-300', 'text-black')
    InterviewFilterBtn.classList.add('bg-gray-300', 'text-black')
    RejectedFilterBtn.classList.add('bg-gray-300', 'text-black')

    const selected = document.getElementById(id)
    //currentStatus=id
    selected.classList.remove('bg-gray-300', 'text-white')
    selected.classList.add('bg-[#3B82F6]', 'text-white')

    if (id == 'Interview-filter-btn') {
        allCardSection.classList.add('hidden')
        filterSection.classList.remove('hidden')
        renderInterview();
    }
    else if (id == 'All-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden')
    }

    else if (id == 'Rejected-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderRejected();
    }
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
    }

    //delete part
  
         else if(event.target.classList.contains('delete-btn'))
         { 

            if(!allCardSection.classList.contains('hidden'))
            {
 const parenNode = event.target.closest('.card');
  parenNode.remove(); 
   calculateCount(); 

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




