
function togglePlugin(id) {
    var e = document.getElementById('plugs-' + id);
    var b = document.getElementById('plugs-showhide-' + id);
    if (window.getComputedStyle(e).display != 'none') {
	e.style.display = 'none';
	b.innerHTML = '&#9654; More';
    } else {
	e.style.display = 'block';
	b.innerHTML = '&#9660; Less';
    }
}

