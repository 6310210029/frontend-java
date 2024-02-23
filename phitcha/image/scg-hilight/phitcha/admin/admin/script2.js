window.addEventListener('DOMContentLoaded', event => {

    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

    // เพิ่ม event listener สำหรับ scroll
    window.addEventListener('scroll', () => {
        const stickyHeader = document.querySelector('.sticky-row');
        
        // ตรวจสอบว่ามีหัวข้อที่ต้องการให้เลื่อนหรือไม่
        if (stickyHeader) {
            const isSticky = window.scrollY > 0;
            
            // ปรับ CSS ขึ้นอยู่กับการ scroll
            stickyHeader.style.position = isSticky ? 'fixed' : 'static';
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const dataTable = $('#datatablesSimple').DataTable();
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function () {
        dataTable.column(1).search(this.value).draw();
    });
});



var information_page_1 = document.getElementById('information_page_1');
var information_page_2 = document.getElementById('information_page_2');
var information_page_3 = document.getElementById('information_page_3');
var information_page_4 = document.getElementById('information_page_4');
var idle = document.getElementById('idle');

function STSbtn(){
    information_page_1.style.display='block';
    information_page_2.style.display='none';
    information_page_3.style.display='none';
    information_page_4.style.display='none';
    idle.style.display='none';
}
function SCGbtn(){
    information_page_2.style.display='block';
    information_page_1.style.display='none';
    information_page_3.style.display='none';
    information_page_4.style.display='none';
    idle.style.display='none';
}
function ERPbtn(){
    information_page_3.style.display='block';
    information_page_1.style.display='none';
    information_page_2.style.display='none';
    information_page_4.style.display='none';
    idle.style.display='none';
}
function ITbtn(){
    information_page_4.style.display='block';
    information_page_1.style.display='none';
    information_page_2.style.display='none';
    information_page_3.style.display='none';
    idle.style.display='none';
}