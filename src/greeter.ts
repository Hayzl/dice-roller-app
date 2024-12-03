function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Test";

document.body.innerHTML = `<span>${greeter(user)}</span>`;