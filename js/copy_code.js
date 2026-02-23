/*This script allows users to just hit the button to copy code text instead of having
to highlight it all. 2/20/26 Gabriel Berres*/ 

function copyCode(id) {
    const code = document.getElementById(id).innerText;
    navigator.clipboard.writeText(code).then(() => {
        // Create a toast
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.innerText = 'SQL Copied to Clipboard!';
        document.body.appendChild(toast);
        // "show" animation
        setTimeout(() => toast.classList.add('show'), 10);
        // Remove it after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    });
}