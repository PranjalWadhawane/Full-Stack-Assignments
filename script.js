
document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let id = document.getElementById("studentId").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;

    let html = Number(document.getElementById("html").value);
    let css = Number(document.getElementById("css").value);
    let js = Number(document.getElementById("js").value);

    if (html < 0 || html > 100 ||
        css < 0 || css > 100 ||
        js < 0 || js > 100) {
        alert("Marks must be between 0 and 100.");
        return;
    }

    let total = html + css + js;
    let percentage = (total / 300) * 100;
    let status = (html >= 40 && css >= 40 && js >= 40)
        ? "PASS" : "FAIL";

    let student = {
        id: id,
        name: name,
        email: email,
        course: course,
        marks: { html: html, css: css, javascript: js },
        total: total,
        percentage: percentage.toFixed(2),
        result: status
    };

    localStorage.setItem("studentResult", JSON.stringify(student));

    document.getElementById("result").innerHTML = `
        <h2>Student Result</h2>
        <p><b>Student Name:</b> ${name}</p>
        <p><b>Student ID:</b> ${id}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Course:</b> ${course}</p>
        <hr>
        <p><b>HTML Marks:</b> ${html}/100</p>
        <p><b>CSS Marks:</b> ${css}/100</p>
        <p><b>JavaScript Marks:</b> ${js}/100</p>
        <hr>
        <p><b>Total Marks:</b> ${total}/300</p>
        <p><b>Percentage:</b> ${percentage.toFixed(2)}%</p>
        <p class="${status === 'PASS' ? 'pass' : 'fail'}">
            <b>Result: ${status}</b>
        </p>
    `;

    document.getElementById("result").scrollIntoView({
        behavior: "smooth"
    });
});