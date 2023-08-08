function savePost() {
    const title = document.getElementById('title').value;
    const resume = document.getElementById('resume').value;
    const category = document.getElementById('category').value;
    const author = document.getElementById('author').value;
    const date = document.getElementById('date').value;

    console.log(title, category, resume, author, date);
}

function cleanFields() {
    document.getElementById("title").value = "";
    document.getElementById("resume").value = "";
    document.getElementById("category").value = "";
    document.getElementById("author").value = "";
    document.getElementById("date").value = "";
}
