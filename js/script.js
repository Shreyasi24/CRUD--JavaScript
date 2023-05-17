let url = "https://crudcrud.com/api/1ddf6bcacb6d4582b5aa20bb44feb3a2/users/";


function get() {
    fetch(url)
        .then((res) => res.json()
            .then((data) => console.log(data)))
};

function post(posts) {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify((posts))
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
};
// post({ userId: 1, name: "Shreyasi Chatterjee", age: 26, colour: "blue" });
// post({ userId: 2, name: "Shourya RoyChowdhury", age: 28, colour: "green" });

function update(update) {
    fetch(`https://crudcrud.com/api/1ddf6bcacb6d4582b5aa20bb44feb3a2/users/641187456047da03e808e36b`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(update)
    })
        .then((res) => res.json())
        .then((res) => console.log(res))

}
// update({ "name": "Avvek" })

function deletes() {
    fetch("https://crudcrud.com/api/1ddf6bcacb6d4582b5aa20bb44feb3a2/users/641187b96047da03e808e377", {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    }).then((res) => res.json())
        .then((res) => console.log(res))
}
//deletes();
//get();