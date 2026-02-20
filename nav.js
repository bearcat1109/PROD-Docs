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
});