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
        date: "Jun 2018-Current",
        technologies: ["python", "regex", "mips"],
        description: `
            CLI python package to simulate a MIPS program by interpreting assembly text.
            Future plans for vscode extension to enable debugging and visualization.
        `.trim()
    },
    {
        name: `"DASH" — Automated Interactive Course Orchestration`,
        icon: "nf-dev-git",
        date: "Aug 2017-Apr 2018",
        technologies: ["python", "gitlab", "git"],
        description: `
            An interactive tool to assist in setting up a private gitlab
            instance to be used for source submission along with assignment
            distribution.
        `.trim()
    },
    {
        name: `"Moon OS" — Operating System`,
        icon: "nf-custom-c",
        date: "Aug 2017-Dec 2017",
        technologies: ["c", "x86", "shell", "memory allocator", "ahci", "qemu"],
        description: `
            An original operating system in C targeting the x86 platform.
            Features include:
            context switching,
            harddrive AHCI driver
            virtual memory management,
            COW fork,
            and userspace processes.
            Tested and run on real hardware and qemu.
        `.trim()
    },
    {
        name: `"Glitter" — Full Stack Social Networking Web App`,
        icon: "nf-mdi-nodejs", //"nf-dev-javascript_badge", //"nf-seti-javascript",
        date: "Jan 2017-May 2017",
        technologies: ["nodejs", "ansible", "mongodb", "IAAS"],
        description: `
            A NodeJS Web Server utilizing IAAS deployment:
            nodejs multi-process clustering,
            clustered MongoDB database,
            Ansible for continuous deployment.
        `.trim()
    },
    {
        name: `"Wolfie Script" — Original Scripting Language`,
        icon: "nf-seti-python",
        date: "May 2016-Aug 2016",
        technologies: ["python", "ply", "AST"],
        description: `
            Implemented Abstract Syntax Tree in Python PLY library:
            duck type variables, shallow scoping, if/else statements,
            while loops.
        `.trim()
    },
    {
        name: `"Atomic Comics" — Comic Creation tool`,
        icon: "nf-dev-angular",
        date: "Jan 2016-May 2016",
        technologies: ["angularjs", "java", "HTML5 Canvas", "PAAS"],
        description: `
            Web app in AngularJS and Java utilizing PAAS deployment:
            Saved user generated content from HTML5 Canvas.
            Published canvas contents to landing page and
            enabled users to modify saved work.
        `.trim()
    },
    {
        name: `"WolfieBall" — Java Fantasy Baseball`,
        icon: "nf-fae-java",
        date: "Jan 2015-May 2015",
        technologies: ["java", "javafx", "JSON", "multithreading"],
        description: `
            Java Desktop App: Loaded MLB JSON data,
            assisted in constructing fantasy teams,
            used multithreading to auto populate teams,
            helped professor win his MLB Fantasy League (Apr 17).
        `.trim()
    },
];
