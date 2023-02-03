import { createBunny, getFamilies, checkAuth, logout } from '../fetch-utils.js';

const form = document.querySelector('.bunny-form');
const logoutButton = document.getElementById('logout');
const familyOptionsEl = document.querySelector('#family-options');

let families = [];
form.addEventListener('submit', async (e) => {
    // prevent default
    e.preventDefault();

    // get the name and family id from the form
    let formData = new FormData(form);
    let data = { name: formData.get('bunny-name'), family_id: formData.get('family-id') };
    console.log(data);
    // use createBunny to create a bunny with this name and family id

    form.reset();
});

window.addEventListener('load', async () => {
    // let's dynamically fill in the families dropdown from supabase
    families = await getFamilies();
    console.log(families);
    for (let family of families) {
        const option = document.createElement('option');
        option.textContent = family.name;
        option.value = family.id;
        familyOptionsEl.append(option);
    }
    // grab the select HTML element from the DOM
    // go get the families from supabase
    // for each family
    // create an option tag
    // set the option's value and text content
    // and append the option to the select
});

checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});
