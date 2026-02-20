// This file produces the navigation options bar, so that the bar does not have 
// to be changed in every single table _target file. 2/20/26 Gabriel Berres

// Function to load external Prism syntax highlighitng when we nav to a new page.
function loadPrism() {
    // Add CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js';
    document.head.appendChild(script);

    // WAIT for Main JS to load before adding SQL
    script.onload = function() {
        const sqlScript = document.createElement('script');
        sqlScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-sql.min.js';
        document.head.appendChild(sqlScript);
        
        // Final highlight once everything is confirmed to be there
        sqlScript.onload = function() {
            Prism.highlightAll();
        };
    };
}

loadPrism();

document.addEventListener("DOMContentLoaded", function() {
    const navHTML = `
        <a href="index.html" class="home-icon" title="Go to Home Catalog">&#8962;</a>
        
        <div class="nav-dropdown-group">
            <label for="table-views">Go To Table View:</label>
            <select id="table-views" onchange="window.location.href=this.value;">
                <option value="">-- Select a Table --</option>
                <option value="SPRIDEN_target.html">SPRIDEN (Identification)</option>
                <option value="SPBPERS_target.html">SPBPERS (Bio/Demo)</option>
                <option value="SPRTELE_target.html">SPRTELE (Telephone)</option>
                <option value="SPRADDR_target.html">SPRADDR (Address)</option>
            </select>
        </div>
    `;

    const placeholder = document.getElementById('nav-placeholder');
    if (placeholder) {
        placeholder.innerHTML = navHTML;
        
        // Auto-select logic
        const currentPage = window.location.pathname.split("/").pop();
        const select = placeholder.querySelector('select');
        for (let i = 0; i < select.options.length; i++) {
            if (select.options[i].value === currentPage) {
                select.selectedIndex = i;
                break;
            }
        }
    }

    setTimeout(() => { Prism.highlightAll(); }, 100);
});