//Footer--------------------------------------------------------------------------------
const today = new Date ();
const thisYear = today.getFullYear()
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `&copy; Denis Ivanov ${thisYear}`
footer.appendChild(copyright);

//Skills list---------------------------------------------------------------------------
const skills = [
    'HTML',
    'CSS',
    'JavaScript'
    ];
skillsSection = document.getElementById('skills');
 

skillsList = skillsSection.querySelector('ul');

 for (let i = 0; i < skills.length; i++) {
    skill = document.createElement('li');
    skill.innerText = skills[i]
    skillsList.appendChild(skill);
    skill.className='mySkills'
 };

//Messages----------------------------------------------------------------------------------
 const messageForm = document.querySelector('[name="leave_message"]');

 messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const names = e.target.name.value;
    const emails = e.target.email.value;
    const messages = e.target.message.value;
    console.log(names, emails, messages);
   
    //Showing message
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML=  ` <a href=mailto:${emails} >     ${names} </a> wrote:  ${messages}`; 

    //Remove button
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';

    removeButton.addEventListener("click", () => {
        let entry = removeButton.parentNode;
        entry.remove();
      });

    messageList.appendChild(newMessage);
    newMessage.appendChild(removeButton);
    //Form reset
    document.querySelector('[name="leave_message"]').reset() 
 });

//Fetch Git Repositories-----------------------------------------------------------------------------
const githubRequest = new XMLHttpRequest();
githubRequest.open("GET", "https://api.github.com/users/KgSolomon/repos");
githubRequest.send();

githubRequest.addEventListener('load', (event) => {

    const responses = JSON.parse(githubRequest.responseText);
    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");
   
    for (let i = 0; i < responses.length; i++) {
      console.log(responses[i]);
      project = document.createElement("li");
      project.className="projectos";
      project.innerText = responses[i].name;
      projectList.appendChild(project);
    }
 
 
  });
 