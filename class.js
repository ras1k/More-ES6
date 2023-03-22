class Instructor{
    name;
    designation = 'Frontend Engineer'
    team = 'Web Team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`Start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }

}

const Rasik = new Instructor('Rasik', 'Chittagong');
console.log(Rasik);
Rasik.startSupportSession('9.00 am');
Rasik.createQuiz(69);