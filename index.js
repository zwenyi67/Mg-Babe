// Define the date of your first date (year, month (0-indexed), day)
const firstDate = new Date(2021, 7, 6); // June 26, 2021 (months are 0-indexed)

// Get the current date
const currentDate = new Date();

// Calculate the difference in milliseconds
const timeDifference = currentDate - firstDate;

// Calculate the difference in days
const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// Calculate years
let years = currentDate.getFullYear() - firstDate.getFullYear();

// Calculate months
let months = currentDate.getMonth() - firstDate.getMonth();

// If the month difference is negative, adjust the year and month count
if (months < 0) {
    years--;
    months += 12;
}

// Calculate remaining days
let remainingDays = currentDate.getDate() - firstDate.getDate();

// If the day difference is negative, adjust the month and day count
if (remainingDays < 0) {
    months--;
    if (months < 0) {
        months += 12;
        years--;
    }
    const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    remainingDays += lastMonth.getDate();
}

// Adjust months to be 1-indexed
months += 1;

const year = document.getElementById('year');
const month = document.getElementById('month');
const day = document.getElementById('day');
const countDays = document.getElementById('count-days');


year.textContent = years;
month.textContent = months;
day.textContent = remainingDays;
countDays.textContent = days;


function setActive(event, tab) {
    event.preventDefault();

    const firsttab = document.getElementById('firsttab');
    const secondtab = document.getElementById('secondtab');

    var tabBtn = document.querySelectorAll('.tab-btn');
    tabBtn.forEach(function (item) {
        item.classList.remove('tab-active');
    });

    event.currentTarget.classList.add('tab-active');

    if (tab === 'second') {
        firsttab.classList.add('d-none');
        secondtab.classList.remove('d-none');
    } else {
        firsttab.classList.remove('d-none');
        secondtab.classList.add('d-none');
    }

}

document.addEventListener('DOMContentLoaded', function () {
    let start = document.getElementById('start');
    let firsttab = document.getElementById('firsttab');
    let secondtab = document.getElementById('secondtab');
    let malebox = document.getElementById('malebox');
    let femalebox = document.getElementById('femalebox');
    let heartbox = document.getElementById('heartbox');

    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                firsttab.classList.add('animate__backInDown');
                secondtab.classList.add('animate__backInDown');
                malebox.classList.add('animate__fadeInLeft');
                femalebox.classList.add('animate__fadeInRight');
                heartbox.classList.add('animate__backInUp');
            } else {
                firsttab.classList.remove('animate__backInDown');
                secondtab.classList.remove('animate__backInDown');
                malebox.classList.remove('animate__fadeInLeft');
                femalebox.classList.remove('animate__fadeInRight');
                heartbox.classList.remove('animate__backInUp');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(start);
});

document.addEventListener('DOMContentLoaded', function () {
    let anni = document.getElementById('anni');
    let annimsg = document.getElementById('annimsg');
    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                annimsg.classList.add('animate__backInLeft');
            } else {
                annimsg.classList.remove('animate__backInLeft');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(anni);
});



document.addEventListener('DOMContentLoaded', function () {
    let home = document.getElementById('home');
    let image1 = document.getElementById('image1');
    let image2 = document.getElementById('image2');
    let image3 = document.getElementById('image3');
    let image4 = document.getElementById('image4');

    let bannertext = document.getElementById('bannertext');

    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                image1.classList.add('animate__fadeInLeft');
                image2.classList.add('animate__fadeInLeft');
                image3.classList.add('animate__lightSpeedInRight');
                image4.classList.add('animate__lightSpeedInRight');
                bannertext.classList.add('animate__bounceInDown');
            } else {
                image1.classList.remove('animate__fadeInLeft');
                image2.classList.remove('animate__fadeInLeft');
                image3.classList.remove('animate__lightSpeedInRight');
                image4.classList.remove('animate__lightSpeedInRight');
                bannertext.classList.remove('animate__bounceInDown');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(home);
});

document.addEventListener('DOMContentLoaded', function () {
    let firstlove = document.getElementById('firstlove');
    let mylove1 = document.getElementById('mylove1');
    let mylove2 = document.getElementById('mylove2');
    let mylove3 = document.getElementById('mylove3');
    let mylove4 = document.getElementById('mylove4');
    let mylove5 = document.getElementById('mylove5');
    let mylove6 = document.getElementById('mylove6');
    let mylove7 = document.getElementById('mylove7');
    let mylove8 = document.getElementById('mylove8');
    let mylove9 = document.getElementById('mylove9');
    let mylovemsg = document.getElementById('mylovemsg');

    


    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                mylove1.classList.add('animate__fadeInDown');
                mylove2.classList.add('animate__fadeInDown');
                mylove3.classList.add('animate__fadeInDown');
                mylove4.classList.add('animate__fadeInDown');
                mylove5.classList.add('animate__fadeInDown');
                mylove6.classList.add('animate__fadeInDown');
                mylove7.classList.add('animate__fadeInDown');
                mylove8.classList.add('animate__fadeInDown');
                mylove9.classList.add('animate__fadeInDown');
                mylovemsg.classList.add('animate__fadeInRightBig');
            } else {
                mylove1.classList.remove('animate__fadeInDown');
                mylove2.classList.remove('animate__fadeInDown');
                mylove3.classList.remove('animate__fadeInDown');
                mylove4.classList.remove('animate__fadeInDown');
                mylove5.classList.remove('animate__fadeInDown');
                mylove6.classList.remove('animate__fadeInDown');
                mylove7.classList.remove('animate__fadeInDown');
                mylove8.classList.remove('animate__fadeInDown');
                mylove9.classList.remove('animate__fadeInDown');
                mylovemsg.classList.remove('animate__fadeInRightBig');

            }
        });
    }, { threshold: 0.1 });

    observer.observe(firstlove);
});

document.addEventListener('DOMContentLoaded', function () {
    let love = document.getElementById('love');
    let image1 = document.getElementById('love-img1');
    let image2 = document.getElementById('love-img2');
    let image3 = document.getElementById('love-img3');
    let image4 = document.getElementById('love-img4');
    let image5 = document.getElementById('love-img5');
    let image6 = document.getElementById('love-img6');
    let image7 = document.getElementById('love-img7');
    let image8 = document.getElementById('love-img8');
    let image9 = document.getElementById('love-img9');
    let image10 = document.getElementById('love-img10');
    let image11 = document.getElementById('love-img11');
    let image12 = document.getElementById('love-img12');
    let image13 = document.getElementById('love-img13');
    let image14 = document.getElementById('love-img14');
    let image15 = document.getElementById('love-img15');
    let image16 = document.getElementById('love-img16');

    let bannertext = document.getElementById('bannertext');

    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                image1.classList.add('animate__fadeInDown');
                image2.classList.add('animate__fadeInDown');
                image3.classList.add('animate__fadeInLeft');
                image4.classList.add('animate__fadeInLeft');
                image5.classList.add('animate__fadeInLeft');
                image6.classList.add('animate__fadeInRight');
                image7.classList.add('animate__fadeInRight');
                image8.classList.add('animate__fadeInLeft');
                image9.classList.add('animate__fadeInLeft');
                image10.classList.add('animate__fadeInRight');
                image11.classList.add('animate__fadeInRight');
                image12.classList.add('animate__fadeInRight');
                image13.classList.add('animate__fadeInUp');
                image14.classList.add('animate__fadeInUp');
                image15.classList.add('animate__fadeInUp');
                image16.classList.add('animate__fadeInUp');
            } else {
                image1.classList.remove('animate__fadeInDown');
                image2.classList.remove('animate__fadeInDown');
                image3.classList.remove('animate__fadeInLeft');
                image4.classList.remove('animate__fadeInLeft');
                image5.classList.remove('animate__fadeInLeft');
                image6.classList.remove('animate__fadeInRight');
                image7.classList.remove('animate__fadeInRight');
                image8.classList.remove('animate__fadeInLeft');
                image9.classList.remove('animate__fadeInLeft');
                image10.classList.remove('animate__fadeInRight');
                image11.classList.remove('animate__fadeInRight');
                image12.classList.remove('animate__fadeInRight');
                image13.classList.remove('animate__fadeInUp');
                image14.classList.remove('animate__fadeInUp');
                image15.classList.remove('animate__fadeInUp');
                image16.classList.remove('animate__fadeInUp');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(love);
});

document.addEventListener('DOMContentLoaded', function () {
    let kiss = document.getElementById('kiss');
    let kisstext = document.getElementById('kisstext');
    let leftkiss = document.getElementById('leftkiss');
    let rightkiss = document.getElementById('rightkiss');
    let image4 = document.getElementById('image4');

    let bannertext = document.getElementById('bannertext');

    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                kisstext.classList.add('animate__tada');
                leftkiss.classList.add('animate__fadeInLeft');
                rightkiss.classList.add('animate__fadeInRight');
            } else {
                kisstext.classList.remove('animate__tada');
                leftkiss.classList.remove('animate__fadeInLeft');
                rightkiss.classList.remove('animate__fadeInRight');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(kiss);
});