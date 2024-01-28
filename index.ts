type Level = 'junior' | 'middle' | 'senior';

interface Developer {
    login: string;
    skills: string[];
    level: Level;
}

let listDev: Developer[]=[];

function addDeveloper() {
    const loginInput = document.getElementById('login') as HTMLInputElement;
    const skillsInput = document.getElementById('skills') as HTMLInputElement;
    const levelSelect = document.getElementById('level') as HTMLSelectElement;
  
    const login = loginInput.value;
    const skills = skillsInput.value.split(',').map(skill => skill.trim());
    const level = levelSelect.value as Level;
  
    const developer: Developer = { login, skills, level };
  
    listDev.push(developer);
    localStorage.setItem('developers', JSON.stringify(listDev));
  
  
    loginInput.value = '';
    skillsInput.value = '';
  }
  function deleteDeveloper(login: string) {
    const index = listDev.findIndex(dev => dev.login === login);
    if (index !== -1) {
      listDev.splice(index, 1);
      localStorage.setItem('developers', JSON.stringify(listDev));
    }
  }
  function updateDeveloperList() {

    for (const developer of listDev) {
      const listItem = document.createElement('li');
      listItem.textContent = `Login: ${developer.login}, Skills: ${developer.skills.join(', ')}, Level: ${developer.level}`;
    }
  }

  updateDeveloperList();