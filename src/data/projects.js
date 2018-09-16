/*
interface IProject {
    name: string;
    icons: string[];
    date: string;
    description: string;
}
*/

exports.projects = [
    {
        name: `"DASH" — Automated Interactive Course Orchestration`,
        icons: ["nf-seti-python"],
        date: "August 2017 - April 2018",
        description: `
            An interactive tool to assist in setting up a private gitlab
            instance to be used for source submission along with assignment
            distribution
        `
    },
    {
        name: `"Moon OS" — Operating System`,
        icons: ["nf-custom-c"],
        date: "August 2017 - December 2017",
        description: `
            An original operating system in C: Context switching,
            Virtual Memory management, COW fork, Userspace processes,
            Runs on real hardware (and qemu)
        `
    },
    {
        name: `"Glitter" — Full Stack Social Networking Web Application`,
        icons: ["nf-dev-ruby", "nf-mdi-nodejs"],
        date: "January 2017 - May 2017",
        description: `
            A Rails and NodeJS Web Server:
            utilizing unicorn workers / pm2, a clustered MongoDB database,
            Ansible for continuous deployment
        `
    },
    {
        name: `"Wolfie Script" — Original Scripting Language`,
        icons: ["nf-seti-python"],
        date: "May 2016 - August 2016",
        description: `
            Implemented Abstract Syntax Tree in Python PLY library:
            duck type variables, shallow scoping, if/else statements,
            while loops
        `
    },
    {
        name: `"Atomic Comics" — Comic Creation tool`,
        icons: ["nf-fae-java", "nf-dev-angular", "nf-dev-google_cloud_platform"],
        date: "January 2016 - May 2016",
        description: `
            Web-app in AngularJS and Java Google App Engine: Saved user
            content generated on HTML5 Canvas and Published user content
            to landing page
        `
    },
    {
        name: `"WolfieBall" — Java Fantasy Baseball`,
        icons: ["nf-fae-java", "nf-seti-json"],
        date: "January 2015 - May 2015",
        description: `
            Java Desktop App: Loaded MLB JSON data,
            assisted in constructing fantasy teams,
            used multithreading to auto populate teams,
            helped professor win his MLB Fantasy League (April '17)
        `
    },
];
