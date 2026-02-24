// This file produces the navigation options bar, so that the bar does not have 
// to be changed in every single table _target file. 2/20/26 Gabriel Berres

document.addEventListener("DOMContentLoaded", function() {
    const navHTML = `
        <a href="index.html" class="home-icon" title="Go to Home Catalog">&#8962;</a>

        <div class="nav-dropdown-group">
            <a href="#sql-queries" class="jump-btn">Just show me that SQL ↓</a>

            <label for="table-views">Go To Table View:</label>
            <select id="table-views" onchange="window.location.href=this.value;">
                <option value="">-- Select a Table --</option>
                <option value="SPRIDEN_target.html">SPRIDEN (Identification)</option>
                <option value="SGBSTDN_target.html">SGBSTDN (Student Base)</option>
                <option value="WM_SLL_CRSE_target.html">WM_SLL_CRSE (Watermark Courses)</option>
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
