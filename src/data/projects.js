/*
interface IProject {
    name: string;
    icon: string;
    date: string;
    description: string;
}
*/

exports.projects = [
    {
        name: `"Dashmips" — MIPS Assembly simulator`,
        icon: "nf-seti-python",
        date: "Jun 18 - Current",
        description: `
            CLI python package to simulate a MIPS program by interpreting asm text
            Future plans for vscode extention to enable debugging and visualization
        `
    },
    {
        name: `"DASH" — Automated Interactive Course Orchestration`,
        icon: "nf-seti-python",
        date: "Aug 17 - Apr 18",
        description: `
            An interactive tool to assist in setting up a private gitlab
            instance to be used for source submission along with assignment
            distribution
        `
    },
    {
        name: `"Moon OS" — Operating System`,
        icon: "nf-custom-c",
        date: "Aug 17 - Dec 17",
        description: `
            An original operating system in C: Context switching,
            Virtual Memory management, COW fork, Userspace processes,
            Runs on real hardware (and qemu)
        `
    },
    {
        name: `"Glitter" — Full Stack Social Networking Web Application`,
        icon: "nf-mdi-nodejs",
        date: "Jan 17 - May 17",
        description: `
            A Rails and NodeJS Web Server:
            utilizing unicorn workers / pm2, a clustered MongoDB database,
            Ansible for continuous deployment
        `
    },
    {
        name: `"Wolfie Script" — Original Scripting Language`,
        icon: "nf-seti-python",
        date: "May 16 - Aug 16",
        description: `
            Implemented Abstract Syntax Tree in Python PLY library:
            duck type variables, shallow scoping, if/else statements,
            while loops
        `
    },
    {
        name: `"Atomic Comics" — Comic Creation tool`,
        icon: "nf-dev-angular",
        date: "Jan 16 - May 16",
        description: `
            Web-app in AngularJS and Java Google App Engine: Saved user
            content generated on HTML5 Canvas and Published user content
            to landing page
        `
    },
    {
        name: `"WolfieBall" — Java Fantasy Baseball`,
        icon: "nf-fae-java",
        date: "Jan 15 - May 15",
        description: `
            Java Desktop App: Loaded MLB JSON data,
            assisted in constructing fantasy teams,
            used multithreading to auto populate teams,
            helped professor win his MLB Fantasy League (Apr 17)
        `
    },
];
