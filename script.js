document.addEventListener('DOMContentLoaded', () => {
    // Contact Us Button
    const contactBtn = document.querySelector('.contact-btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            // You can customize this to open a contact form or redirect to contact page
            alert('Contact form coming soon! Please email us at contact@healthlinkexperts.com');
        });
    }

    // Find Your Doctor Button
    const findDoctorBtn = document.querySelector('.find-your-doctor-btn');
    if (findDoctorBtn) {
        findDoctorBtn.addEventListener('click', () => {
            // Redirect to doctors.html page
            window.location.href = 'doctors.html';
        });
    }

    // Schedule Now Button (commented out in HTML but included for future use)
    const scheduleBtn = document.querySelector('.card-btn');
    if (scheduleBtn) {
        scheduleBtn.addEventListener('click', () => {
            // You can customize this to open scheduling system
            alert('Online scheduling system coming soon!');
        });
    }
});

// Create the doctors.html file when the script loads
const createDoctorsPage = () => {
    const blob = new Blob([doctorsHTML], { type: 'text/html' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'doctors.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};

// Uncomment the line below to automatically generate doctors.html when the script runs
createDoctorsPage();

// Create help center page
const createHelpCenterPage = () => {
    const blob = new Blob([helpCenterHTML], { type: 'text/html' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'help.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};


// Update contact button click handler
const contactBtn = document.querySelector('.contact-btn');
if (contactBtn) {
    contactBtn.addEventListener('click', () => {
        window.location.href = 'contact us.html';
    });
}
