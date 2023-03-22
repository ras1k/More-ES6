class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    providefeedback(){
        console.log(`${this.name} thank you for your feedback`)
    }
}

class Instructor extends TeamMember{

    designation = 'Frontend Engineer'
    team = 'Web Team'
    constructor(name, location){
       super(name, location);
    }
    startSupportSession(time){
        console.log(`Start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
}

class Developer extends TeamMember{

    designation = 'Frontend Engineer'
    team = 'Web Team'
    tech;
    constructor(name, location, tech){
        super(name, location);
        this.tech = tech;
    }
    developfeature(feature){
        console.log(`Please Develop the ${feature}`)
    }
    release(version){
        console.log(`Please Develop the ${version}`)
    }
}

class JobPlacement extends TeamMember{

    designation = 'Frontend Engineer'
    team = 'Web Team'
    region;
    constructor(name, location, region){
        super(name, location);
        this.region = region;
    }
    provideResume(resume){
        console.log(`Please Develop the ${resume}`)
    }
    prepareStudent(student){
        console.log(`Please Develop the ${student}`)
    }
}

const Rasik = new Developer('Rasik Hawk', 'Dhaka', 'React');
console.log(Rasik);
Rasik.providefeedback();