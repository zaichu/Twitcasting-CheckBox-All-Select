const select_checkbox_all = () => {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = true;
    });
}

window.addEventListener('load', () => select_checkbox_all(), false);
